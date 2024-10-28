import React from "react";

import {Button} from "reactstrap";
import ScanbuyModal, {ModalState} from "./components/ScanbuyModal";
import {ComponentStore} from "./components/ComponentStore";
import 'bootstrap/dist/css/bootstrap.min.css';

// Create instances of the MobX stores
const modalStore = ModalState.create({ open: false, title: "Scan QR Code" });
const componentStore = ComponentStore.create({ scannedData: "" });

const App = () => {
    return (
        <div >
            <Button onClick={() => modalStore.toggle()}>Open QR Scanner Modal</Button>


            <ScanbuyModal
                modalStore={modalStore}
                componentStore={componentStore}
            />

        </div>
    );
};

export default App;
