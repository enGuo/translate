<template>
  <div class="svg-demo">
    <div class="controls">
      <fieldset>
        <legend class="title">
          viewBox
        </legend>
        <div class="prop-wrap"
          v-for="item in items"
          :key="item.name">
          <span class="prop">[ {{item.name}} ]</span>
          <div class="range-wrap">
            <input type="range"
              min="0"
              max="1600"
              step="10"
              @input="changeHandle"
              v-model="prop[item.name]">
            <output for="viewbox-width">{{prop[item.name]}}</output>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend class="title">
          preserveAspectRatio
        </legend>
        <span class="prop">[ align ]</span>
        <select class="preserveAspectRatio-options"
          v-model="select">
          <option value="none">None</option>
          <option value="xMinYMin">xMinYMin</option>
          <option value="xMinYMid">xMinYMid</option>
          <option value="xMinYMax">xMinYMax</option>
          <option value="xMidYMin">xMidYMin</option>
          <option value="xMidYMid">xMidYMid</option>
          <option value="xMidYMax">xMidYMax</option>
          <option value="xMaxYMin">xMaxYMin</option>
          <option value="xMaxYMid">xMaxYMid</option>
          <option value="xMaxYMax">xMaxYMax</option>
          <option value="xMinYMin">xMinYMin</option>
          <option value="xMinYMid">xMinYMid</option>
          <option value="xMinYMax">xMinYMax</option>
          <option value="xMidYMin">xMidYMin</option>
          <option value="xMidYMid">xMidYMid</option>
          <option value="xMidYMax">xMidYMax</option>
          <option value="xMaxYMin">xMaxYMin</option>
          <option value="xMaxYMid">xMaxYMid</option>
          <option value="xMaxYMax">xMaxYMax</option>
        </select>
        <div class="radios">
          <input type="radio"
            v-model="radio"
            value="meet"
            name="meetOrSlice"
            id="meet">
          <label for="meet"
            style="margin-right: 1em;">meet</label>
          <input type="radio"
            v-model="radio"
            value="slice"
            name="meetOrSlice"
            id="slice">
          <label for="slice">slice</label>
        </div>
      </fieldset>
    </div>

    <div class="svg-container">
      <svg class="outer"
        width="800"
        height="600"
        ref="outer"
        viewBox="0 0 800 600">
        <path class="separator ruler"></path>
        <svg class="inner"
          width="800"
          height="600"
          ref="inner"
          :viewBox="viewbox"
          :preserveAspectRatio="preserveAspectRatio">
          <g id="parrot">
            <path fill="#68A284"
              d="M98.595 272.797c-41.144 0-77.262-28.608-97.898-71.725 3.832 44.6 25.214 98.16 98.218 98.16 72.024 0 94.49-54.748 98.282-99.631C176.686 243.541 140.206 272.797 98.595 272.797z"></path>
            <path fill="#5EEA99"
              d="M196.082 161.237c-20.703 42.64-56.618 70.872-97.487 70.872 -40.322 0-75.837-27.467-96.662-69.153C0.61 170.116 0 177.521 0 185.006c0 5.137 0.222 10.535 0.697 16.066 20.636 43.116 56.754 71.725 97.898 71.725 41.611 0 78.091-29.256 98.603-73.195 0.422-5.018 0.625-9.916 0.625-14.596C197.822 176.919 197.318 168.93 196.082 161.237z"></path>
            <path fill="#B6382F"
              d="M98.915 94.931c-63.562 0-90.091 30.654-96.982 68.025 20.824 41.687 56.339 69.153 96.662 69.153 40.869 0 76.784-28.232 97.487-70.872C190.195 124.653 167.334 94.931 98.915 94.931z"></path>
            <path fill="#B6382F"
              d="M118.635 0c0.559 3.308-0.557 11.669-8.582 20.761 -3.538 4.004-3.218 3.191-4.57 5.207 -1.356 2.023-3.029 3.832-5.068 5.396 -2.076 1.537-2.77 2.442-6.062 3.158 -0.569-3.316-0.999-3.953-1.232-8.067 -0.139-2.562 0.43-6.148 1.79-8.161 1.368-2.012 2.879-4.152 6.157-6.386C103.149 10.369 115.682 5.588 118.635 0z"></path>
            <path fill="none"
              d="M95.193 185.62h-0.008c0.705 0.101 1.417 0.174 2.151 0.194C96.602 185.794 95.893 185.721 95.193 185.62z"></path>
            <path fill="#B6382F"
              d="M42.493 82.895l-0.026-0.034c0 0 0.004 0.166 0.004 0.422 -0.117 1.52-0.226 3.046-0.226 4.599 0 0.471 0.045 0.934 0.057 1.407 -0.32 5.711-1.168 14.632-3.651 24.038 -1.752 6.597-4.295 13.434-8.063 19.572 -2.735 4.472-4.901 9.551-6.639 14.786 -6.816 20.509-6.842 43.583-6.842 43.583 1.07 44.281 37.275 109.358 81.81 109.358V185.713v-44.488V31.21C69.3 31.21 45.021 53.936 42.493 82.895zM95.185 185.62h0.008c0.7 0.101 1.409 0.174 2.144 0.194C96.602 185.794 95.89 185.721 95.185 185.62z"></path>
            <path fill="#EA575B"
              d="M174.207 148.585c-1.775-5.548-4.021-10.947-6.907-15.687 -3.439-5.646-5.878-11.878-7.604-17.967 -2.954-10.397-3.847-20.393-4.137-26.365 0-0.23 0.026-0.458 0.026-0.686 0-1.032-0.102-2.044-0.155-3.063 -0.022-1.22-0.003-1.957-0.003-1.957l-0.087 0.128c-2.49-29.01-26.777-51.778-56.426-51.778v110.015 44.488 114.913c44.572 0 80.796-65.137 81.806-109.459C180.721 191.167 180.698 168.835 174.207 148.585z"></path>
            <path fill="#CABA9F"
              d="M80.822 78.55c-2.656 4.653-5.429 12.289-2.901 16.539l16.07 26.983c1.266 2.134 2.935 3.199 4.604 3.199V60.084C93.127 60.084 82.571 75.489 80.822 78.55z"></path>
            <path fill="#DDD2C0"
              d="M103.195 122.072l16.069-26.983c2.535-4.25 0.279-10.875-2.9-16.539 -1.323-2.356-13.207-18.466-17.77-18.466v65.186C100.26 125.271 101.933 124.206 103.195 122.072z"></path>
            <path fill="#07171B"
              d="M56.912 70.246c0 5.746 2.878 10.404 6.436 10.404 3.553 0 6.431-4.659 6.431-10.404 0-5.748-2.878-10.403-6.431-10.403C59.791 59.843 56.912 64.499 56.912 70.246z"></path>
            <path fill="#FFFFFF"
              d="M63.807 66.213c0 1.541-1.255 2.794-2.795 2.794 -1.545 0-2.796-1.253-2.796-2.794 0-1.544 1.251-2.794 2.796-2.794C62.552 63.419 63.807 64.668 63.807 66.213z"></path>
            <ellipse fill="#07171B"
              cx="134.481"
              cy="70.246"
              rx="6.433"
              ry="10.404"></ellipse>
            <circle fill="#FFFFFF"
              cx="132.145"
              cy="66.213"
              r="2.794"></circle>
            <path fill="#CABA9F"
              d="M66.542 294.861c0 3.184-2.581 5.765-5.765 5.765l0 0c-3.188 0-5.769-2.581-5.769-5.765v-10.41c0-3.184 2.581-5.764 5.769-5.764l0 0c3.184 0 5.765 2.58 5.765 5.764V294.861z"></path>
            <path fill="#CABA9F"
              d="M78.083 294.861c0 3.184-2.584 5.765-5.769 5.765l0 0c-3.187 0-5.772-2.581-5.772-5.765v-10.41c0-3.184 2.585-5.764 5.772-5.764l0 0c3.184 0 5.769 2.58 5.769 5.764V294.861z"></path>
            <path fill="#CABA9F"
              d="M89.62 294.861c0 3.184-2.581 5.765-5.769 5.765l0 0c-3.188 0-5.769-2.581-5.769-5.765v-10.41c0-3.184 2.581-5.764 5.769-5.764l0 0c3.188 0 5.769 2.58 5.769 5.764V294.861z"></path>
            <path fill="#DDD2C0"
              d="M119.743 294.861c0 3.184-2.581 5.765-5.769 5.765l0 0c-3.188 0-5.769-2.581-5.769-5.765v-10.41c0-3.184 2.581-5.764 5.769-5.764l0 0c3.188 0 5.769 2.58 5.769 5.764V294.861z"></path>
            <path fill="#DDD2C0"
              d="M131.28 294.861c0 3.184-2.581 5.765-5.765 5.765l0 0c-3.191 0-5.772-2.581-5.772-5.765v-10.41c0-3.184 2.581-5.764 5.772-5.764l0 0c3.184 0 5.765 2.58 5.765 5.764V294.861z"></path>
            <path fill="#DDD2C0"
              d="M142.821 294.861c0 3.184-2.585 5.765-5.773 5.765l0 0c-3.183 0-5.768-2.581-5.768-5.765v-10.41c0-3.184 2.585-5.764 5.768-5.764l0 0c3.188 0 5.773 2.58 5.773 5.764V294.861z"></path>
            <path fill="#EA575B"
              d="M125.907 10.497c0.565 3.304-3.541 15.808-7.905 20.605 -1.729 1.899-10.165 10.726-18.8 12.396 -0.569-3.319-1.255-8.693-0.607-11.196 0.682-2.471 2.551-6.471 9.201-9.417C117.434 18.62 121.515 16.084 125.907 10.497z"></path>
          </g>
          <path class="separator ruler"></path>
        </svg>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'minX' },
        { name: 'minY' },
        { name: 'width' },
        { name: 'height' }
      ],
      prop: {
        minX: 0,
        minY: 0,
        width: 400,
        height: 300
      },
      radio: 'meet',
      select: 'none'
    };
  },
  computed: {
    viewbox() {
      const { minX, minY, width, height } = this.prop;
      return `${minX} ${minY} ${width} ${height}`;
    },
    preserveAspectRatio() {
      const { select, radio } = this;
      return `${select} ${radio}`;
    }
  },
  methods: {
    makeRulers(svgElement, distance, units) {
      var svgns = 'http://www.w3.org/2000/svg';
      var vb = svgElement.getAttribute('viewBox').split(' '),
        svgWidth = vb[2],
        nbOfWSeparators = svgWidth / distance,
        nbOfWUnits = svgWidth / units,
        svgHeight = vb[3],
        nbOfHSeparators = svgHeight / distance,
        nbOfHUnits = svgHeight / units,
        pathstring = '',
        path = svgElement.querySelectorAll('.ruler'),
        i,
        g = document.createElementNS(svgns, 'g');

      for (i = 0; i < path.length; i++) {
        if (path[i].parentNode == svgElement) {
          path = path[i];
          break;
        }
      }
      for (i = 0; i <= nbOfWUnits; i++) {
        pathstring += 'M' + i * units + ',0v15';
      }
      for (i = 0; i <= nbOfWSeparators; i++) {
        pathstring += 'M' + i * distance + ',0v30';
        var value = document.createElementNS(svgns, 'text');
        value.setAttribute('x', i * distance - 15);
        value.setAttribute('y', 43);
        value.textContent = i * distance;
        g.appendChild(value);
      }
      for (i = 0; i <= nbOfHUnits; i++) {
        pathstring += 'M0,' + i * units + 'h15';
      }

      for (i = 0; i <= nbOfHSeparators; i++) {
        pathstring += 'M0,' + i * distance + 'h30';
        var value = document.createElementNS(svgns, 'text');
        value.setAttribute('x', 30);
        value.setAttribute('y', i * distance + 5);
        value.textContent = i * distance;
        g.appendChild(value);
      }

      g.setAttribute('class', 'labels');
      g.setAttribute('font-size', '16px');
      path.setAttribute('d', pathstring);
      svgElement.appendChild(g);
    },
    changeHandle() {
      const { inner } = this.$refs;
      var labels = inner.querySelector('.labels');
      labels.parentNode.removeChild(labels);
      this.makeRulers(inner, 100, 10);
    }
  },
  mounted() {
    const { outer, inner } = this.$refs;
    this.makeRulers(outer, 100, 10);
    this.makeRulers(inner, 100, 10);
  }
};
</script>

<style scoped>
.svg-demo {
  margin-top: 50px;
  display: flex;
  box-sizing: border-box;
}
.controls {
  background: #3b3f45;
  color: #fff;
  padding: 0 20px;
  border-right: 10px solid #44474d;
  font-size: 18px;
  height: 600px;
  box-sizing: border-box;
  overflow: auto;
}
output {
  width: 40px;
  color: #2cb2ba;
  font-size: 14px;
  display: flex;
  justify-content: center;
}
input[type='range'] {
  display: inline-block;
  width: 135px;
  background: none !important;

  -webkit-appearance: none;
  -moz-appearance: none;
}

input:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 135px;
  height: 5px;
  background-color: #eee;
  border: none;
  border-radius: 3px;
}
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #2cb2ba;
  margin-top: -8px;
}

input[type='range']::-moz-range-track {
  width: 135px;
  height: 5px;
  background-color: #eee;
  border: none;
  border-radius: 3px;
}
input[type='range']::-moz-range-thumb {
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #2cb2ba;
}

input[type='range']::-ms-track {
  width: 135px;
  height: 20px;
  background-color: #eee;
  border: none;
  border-radius: 10px;
  color: transparent;
}

input[type='range']::-ms-thumb {
  border: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #2cb2ba;
}
.controls .title {
  padding: 10px 0;
}
.prop {
  color: rgb(41, 215, 238);
  display: block;
  padding: 20px 0;
  font-size: 15px;
}
.range-wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
select {
  border: 1px solid transparent;
  background-color: #eee;
  color: #1b1f25;
  border-radius: 3px;
  padding: 3px;
  width: 100%;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
}
select option:nth-of-type(even) {
  background-color: #fff;
}
svg {
  position: absolute;
}
svg.outer {
  background-color: #47494b;
}
.inner .separator {
  stroke: #4cd2da;
  stroke-width: 2;
}
.outer > .separator {
  stroke: #aaa;
  stroke-width: 1;
}
.inner .labels {
  fill: #4cd2da;
  stroke: #2cb2ba;
  stroke-width: 1;
}
.outer > .labels {
  fill: #ccc;
}
</style>
