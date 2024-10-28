import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import {observer} from "mobx-react-lite";

const QrCodeScanner = observer(({ store }) => {
    const qrCodeRef = useRef(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("qr-code-region", {
            fps: 10,
            qrbox: 250,
        });

        const handleScanSuccess = (decodedText) => {
            console.log(`Decoded Text: ${decodedText}`);
            store.setScannedData(decodedText);  // Store the scanned data in MobX store
            scanner.clear();  // Stop scanning after successful scan
        };

        const handleScanFailure = (error) => {
            console.warn(`QR Code scan error: ${error}`);
        };

        scanner.render(handleScanSuccess, handleScanFailure);

        return () => {
            scanner.clear();
        };
    }, [store]);

    return (
        <div>
            <div id="qr-code-region" ref={qrCodeRef} style={{ width: "100%" }} />
        </div>
    );
});

export default QrCodeScanner;
