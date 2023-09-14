import React, { useState } from "react";

const DeviceEmulator = () => {
  const devices = [
    {
      name: "Mobile",
      width: 375,
      height: 667,
    },
    {
      name: "Tablet",
      width: 1024,
      height: 768,
    },
    {
      name: "Desktop",
      width: 1440,
      height: 900,
    },
  ];
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  const handleDeviceChange = (event: any) => {
    const deviceName = event.target.value;
    const device: any = devices.find((d) => d.name === deviceName);
    setSelectedDevice(device);
  };

  return (
    <div className="device-emulator">
      <div className="device-selector">
        <label htmlFor="device-select">Select Device:</label>
        <select
          id="device-select"
          value={selectedDevice.name}
          onChange={handleDeviceChange}
        >
          {devices.map((device) => (
            <option key={device.name} value={device.name}>
              {device.name}
            </option>
          ))}
        </select>
      </div>
      <div className="device-preview">
        <div
          className="device-frame"
          style={{
            width: `${selectedDevice.width}px`,
            height: `${selectedDevice.height}px`,
          }}
        >
          {Array.from(Array(5).keys()).map((item) => (
            <div className="device-content" key={item}>
              <h2>Item {item + 1}</h2>
              <p>This is item {item + 1} in the device preview.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceEmulator;
