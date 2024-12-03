class MosaicTile extends HTMLElement {
  set hass(hass) {
    const entityId = this.config.entity;
    const state = hass.states[entityId];
    const value = parseFloat(state.state);

    const min = this.config.min;
    const max = this.config.max;
    const startColor = this.config.start_color;
    const endColor = this.config.end_color;

    const percentage = (value - min) / (max - min);
    const color = this.interpolateColor(startColor, endColor, percentage);

    this.style.backgroundColor = color;
    this.innerHTML = `
      <div class="mosaic-tile">
        <div class="value">${value}</div>
      </div>
    `;
  }

  setConfig(config) {
    if (!config.entity || !config.min || !config.max || !config.start_color || !config.end_color) {
      throw new Error('You need to define entity, min, max, start_color, and end_color');
    }
    this.config = config;
  }

  getCardSize() {
    return 1;
  }

  interpolateColor(startColor, endColor, percentage) {
    const start = this.hexToRgb(startColor);
    const end = this.hexToRgb(endColor);

    const r = start.r + percentage * (end.r - start.r);
    const g = start.g + percentage * (end.g - start.g);
    const b = start.b + percentage * (end.b - start.b);

    return `rgb(${r}, ${g}, ${b})`;
  }

  hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }
}

customElements.define('mosaic-tile', MosaicTile);

const style = document.createElement('style');
style.textContent = `
  .mosaic-tile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 24px;
  }
`;
document.head.appendChild(style);
