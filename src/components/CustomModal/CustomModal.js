/** @format */

// import "./EditReferee.css";
// import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditTrainingRecord from "../../pages/Referee/RefereeHome/RefereeTrainingRecords/EditTrainingRecord";

import Button from "@mui/material/Button";

export default function CustomModal({ uid, title, record, modalEdit}) {
    // const { t } = useTranslation("global");

    const [modal, setModal] = useState(modalEdit);
    const toggle = () => setModal(!modal);
    const closeBtn = (
        <Button onClick={toggle}>
            <CancelOutlinedIcon style={{ fontSize: "2rem" }} />
        </Button>
    );

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg" centered={true}>
                <ModalHeader toggle={toggle} close={closeBtn}>
                    <h2>{title}</h2>
                </ModalHeader>
                <ModalBody>
                    <EditTrainingRecord uid={uid} toggle={toggle} record={record} />
                </ModalBody>
            </Modal>
        </>
    );
}
