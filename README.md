# Home Assistant Custom Component: Mosaic Tile

This custom component creates a Lovelace card that displays a value and changes its color dynamically based on a minimum and maximum value, and start and end colors.

## Installation

### Manual Installation

1. Download the `mosaic_tile` folder and place it in your `custom_components` directory.
2. Add the following to your `configuration.yaml` file:
   ```yaml
   lovelace:
     resources:
       - url: /local/custom_components/mosaic_tile/mosaic_tile.js
         type: module
   ```
3. Restart Home Assistant.

### HACS Installation

1. Go to the HACS settings in Home Assistant.
2. Click on "Custom repositories".
3. Add the repository URL `https://github.com/githubnext/workspace-blank` and select the category "Lovelace".
4. Click "Add".
5. Find the "Mosaic Tile" custom component in the HACS store and click "Install".
6. Add the following to your `configuration.yaml` file:
   ```yaml
   lovelace:
     resources:
       - url: /hacsfiles/mosaic_tile/mosaic_tile.js
         type: module
   ```
7. Restart Home Assistant.

## Configuration

Add the custom card to your Lovelace configuration. Below is an example configuration:

```yaml
type: 'custom:mosaic-tile'
entity: sensor.your_sensor
min: 0
max: 100
start_color: '#00FF00'
end_color: '#FF0000'
```

## Example

This example shows how to configure the custom card to display a sensor value and change its color from green to red based on the value:

```yaml
type: 'custom:mosaic-tile'
entity: sensor.temperature
min: 0
max: 100
start_color: '#00FF00'
end_color: '#FF0000'
```
