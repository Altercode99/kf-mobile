import React from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

const CustomScanner = ({ onScanned, scanned, children }) => {
  return (
    <BarCodeScanner
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      onBarCodeScanned={scanned ? undefined : onScanned}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </BarCodeScanner>
  );
};

export default CustomScanner;
