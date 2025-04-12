/** @format */

import "./MyModal.css";

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import RefereeTraining from "../../pages/Referee/No_Use_RefereeTraining/RefereeTraining";
import { useTranslation } from "react-i18next";

function MyModal({ uid, buttonTitle }) {
    const { t } = useTranslation("global");

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = (
        <Button onClick={toggle} size="lg" color="seconday">
            <i class="bi bi-x-circle" style={{ fontSize: "2rem", color: "gray" }}></i>
        </Button>
    );

    return (
        <div>
            <Button
                color="primary"
                size="lg"
                onClick={toggle}
                style={{ width: "150px", height: "40px", fontSize: "14px", fontWeight: "bold" }}
            >
                {buttonTitle}
            </Button>
            <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg" centered={true} scrollable={false} >
                <ModalHeader toggle={toggle} close={closeBtn}>
                    <div className="page-primary-title">{t("referee.record.inputRecord")}</div>
                </ModalHeader>
                <ModalBody>
                    <RefereeTraining uid={uid} />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default MyModal;
