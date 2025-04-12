/** @format */

import Modal from "@mui/joy/Modal";
// import ModalClose from "@mui/joy/ModalClose";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// import Typography from '@mui/joy/Typography';
// import Sheet from "@mui/joy/Sheet";

import { DialogContent, DialogTitle, ModalDialog, Stack } from "@mui/joy";

export default function BasicModal({ modalTitle, modalContent, open, handleClose }) {
    //   const [open, setOpen] = React.useState(false);
    return (
        <Modal
            open={open}
            // onClose={handleClose}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "12px" }}
        >
            <ModalDialog
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                sx={(theme) => ({
                    [theme.breakpoints.only("md")]: {
                        top: "unset",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderRadius: 0,
                        transform: "none",
                        maxWidth: "unset",
                    },
                })}
            >
                <Stack direction="row"
                    spacing={2}
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        ml:2
                    }}>
                   
                    <DialogTitle
                        id="modal-title"
                        level="h4"
                        sx={{ color: "tomato", mb: 1, pb: 1, borderBottom: "1px solid lightgrey", width: "100%",}}
                    >
                        {modalTitle}
                    </DialogTitle>
                    <CancelOutlinedIcon
                        onClick={handleClose}
                        sx={{
                            marginLeft: "auto",
                            // marginTop: "12px",
                            // marginRight: "20px",
                            fontSize: "2rem",
                            color: "tomato",
                            cursor: "pointer",
                        }}
                    />
                </Stack>

                {/* <ModalClose variant="soft" color="primary" sx={{ m: 1 }} /> */}

                <DialogContent id="modal-desc">{modalContent}</DialogContent>
            </ModalDialog>
        </Modal>
    );
}
