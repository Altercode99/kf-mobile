import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

const CustomScanner = ({ onScanned, scanned, children }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    alert("Tidak ada izin penggunaan kamera");
  }

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
