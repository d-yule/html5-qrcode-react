import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
    const qrCodeRef = useRef(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("qr-code-region", {
            fps: 10,
            qrbox: 250
        });

        const onScanSuccess = (decodedText, decodedResult) => {
            console.log(`Decoded Text: ${decodedText}`);
            alert(`QR Code detected: ${decodedText}`);
            scanner.clear();  // Stop scanning after successful scan
        };

        const onScanFailure = (error) => {
            console.warn(`QR Code scan error: ${error}`);
        };

        scanner.render(onScanSuccess, onScanFailure);

        return () => {
            scanner.clear();
        };
    }, []);

    return (
        <div>
            <h1>QR Code Scanner</h1>
            <div id="qr-code-region" ref={qrCodeRef} style={{ width: "100%" }} />
        </div>
    );
};

export default Scanner;
