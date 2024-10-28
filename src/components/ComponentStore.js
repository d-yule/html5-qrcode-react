import { types } from "mobx-state-tree";

export const ComponentStore = types.model({
    scannedData: types.maybe(types.string),
}).actions((self) => ({
    setScannedData(data) {
        self.scannedData = data;  // Save the scanned QR code data
    },
}));
