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
      width: 768,
      height: 1024,
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
    <div className="flex flex-col items-center mt-6">
      <div className="mb-4">
        <label htmlFor="device-select" className="text-lg mr-2">
          Select Device:
        </label>
        <select
          id="device-select"
          value={selectedDevice.name}
          onChange={handleDeviceChange}
          className="p-2 text-lg"
        >
          {devices.map((device) => (
            <option key={device.name} value={device.name}>
              {device.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <div
          className="flex flex-wrap justify-center items-center border border-gray-300 bg-gray-100"
          style={{
            width: `${selectedDevice.width}px`,
            height: `${selectedDevice.height}px`,
          }}
        >
          {Array.from(Array(5).keys()).map((item) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/5 p-4 text-center"
              key={item}
            >
              <h2 className="text-lg font-bold mb-2">Item {item + 1}</h2>
              <p>This is item {item + 1} in the device preview.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceEmulator;
