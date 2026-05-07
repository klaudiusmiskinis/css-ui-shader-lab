const body = document.body;

const shaderInputs = document.querySelectorAll('input[name="shader"]');
const patternInputs = document.querySelectorAll('input[name="pattern"]');
const cardsToggle = document.querySelector('#cardsToggle');

const shaderClasses = [
  'shader-none',
  'shader-pixel',
  'shader-comic',
  'shader-glass',
  'shader-noise',
  'shader-chroma',
  'shader-liquid',
  'shader-crt',
  'shader-poster',
  'shader-smear',
  'shader-psx'
];

const patternClasses = [
  'pattern-none',
  'pattern-wavy',
  'pattern-rhombus',
  'pattern-zigzag',
  'pattern-moon',
  'pattern-circles',
  'pattern-diagonal',
  'pattern-paper',
  'pattern-isometric',
  'pattern-polka',
  'pattern-lines',
  'pattern-boxes',
  'pattern-cross'
];

const patternControls = [
  {
    input: document.querySelector('#patternBack'),
    cssVar: '--pattern-back',
    format: (value) => value
  },
  {
    input: document.querySelector('#patternFront'),
    cssVar: '--pattern-front',
    format: (value) => value
  },
  {
    input: document.querySelector('#patternOpacity'),
    output: document.querySelector('#patternOpacityValue'),
    cssVar: '--pattern-opacity',
    format: (value) => Number(value).toFixed(2)
  },
  {
    input: document.querySelector('#patternSpacing'),
    output: document.querySelector('#patternSpacingValue'),
    cssVar: '--pattern-spacing',
    format: (value) => `${Number(value)}px`
  }
];

const shaderControls = [
  {
    input: document.querySelector('#opacity'),
    output: document.querySelector('#opacityValue'),
    cssVar: '--shader-opacity',
    format: (value) => Number(value).toFixed(2)
  },
  {
    input: document.querySelector('#blur'),
    output: document.querySelector('#blurValue'),
    cssVar: '--shader-blur',
    format: (value) => `${Number(value).toFixed(1)}px`
  },
  {
    input: document.querySelector('#contrast'),
    output: document.querySelector('#contrastValue'),
    cssVar: '--shader-contrast',
    format: (value) => Number(value).toFixed(2)
  },
  {
    input: document.querySelector('#saturate'),
    output: document.querySelector('#saturateValue'),
    cssVar: '--shader-saturate',
    format: (value) => Number(value).toFixed(2)
  },
  {
    input: document.querySelector('#scale'),
    output: document.querySelector('#scaleValue'),
    cssVar: '--shader-scale',
    format: (value) => Number(value).toFixed(2)
  }
];

function bindClassRadioGroup(inputs, classNames) {
  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      body.classList.remove(...classNames);
      body.classList.add(input.value);
    });
  });
}

function bindCssVariableControls(controls) {
  controls.forEach(({ input, output, cssVar, format }) => {
    const update = () => {
      const formatted = format(input.value);

      if (output) {
        output.textContent = formatted;
      }

      document.documentElement.style.setProperty(cssVar, formatted);
    };

    input.addEventListener('input', update);
    update();
  });
}

bindClassRadioGroup(shaderInputs, shaderClasses);
bindClassRadioGroup(patternInputs, patternClasses);
bindCssVariableControls(patternControls);
bindCssVariableControls(shaderControls);

cardsToggle.addEventListener('change', () => {
  body.classList.toggle('cards-hidden', !cardsToggle.checked);
});
