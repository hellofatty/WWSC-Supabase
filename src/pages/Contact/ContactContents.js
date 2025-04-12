/** @format */

import ResponsiveIframe from "../../components/ResponsiveImg/ResponsiveIframe";
import { PrimaryTitle, ResParagraphNoIndent, SubTitle } from "../../components/Text/Title/Title";
import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

export function ContactContent() {
    return (
        <div className="img-text-container">
            <div style={{ marginBottom: "20px" }}>
                <PrimaryTitle text="Contac Us" />
            </div>

            <TableContainer>
                <Table aria-label="responsive table" size="small">
                    <TableBody>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                Address:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                Tel:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                626.795.7485
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                Email:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                {" "}
                                <em>
                                    <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                                </em>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <hr />
            <SubTitle text="Welcome To Visit Us" />
            <ResParagraphNoIndent>Please contact us in advance prior to your visit. Thank you!</ResParagraphNoIndent>

            <hr />

            <SubTitle text="Directions to the Office of World Wiser Sport Committee (Google Map)" />

           
                <ResponsiveIframe
                    title="WWSC Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6604.005481577774!2d-118.13583700000001!3d34.146272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c36801966f21%3A0xc4a93365b11ed05!2s709%20E%20Colorado%20Blvd%20%23270%2C%20Pasadena%2C%20CA%2091101!5e0!3m2!1sen!2sus!4v1696109017921!5m2!1sen!2sus"
                />
            
        </div>
    );
}

export function ContactContentTW() {
    return (
        <div className="img-text-container">
            <PrimaryTitle text="聯絡我們" />

            <TableContainer>
                <Table aria-label="responsive table" size="small">
                    <TableBody>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                住址:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                聯絡電話:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                626.795.7485
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                電子郵件信箱:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                {" "}
                                <em>
                                    <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                                </em>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <hr />
            <SubTitle text="歡迎來訪！" />
            <ResParagraphNoIndent>來訪前，請事先聯絡我們，謝謝!</ResParagraphNoIndent>

            <hr />

            <SubTitle text="訪問WWSC辦公室的行駛路線 (Google地圖)" />
            <ResponsiveIframe
                title="WWSC Google地圖"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6604.005481577774!2d-118.13583700000001!3d34.146272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c36801966f21%3A0xc4a93365b11ed05!2s709%20E%20Colorado%20Blvd%20%23270%2C%20Pasadena%2C%20CA%2091101!5e0!3m2!1sen!2sus!4v1696109017921!5m2!1sen!2sus"
            />
        </div>
    );
}

export function ContactContentCN() {
    return (
        <div className="img-text-container">
            <PrimaryTitle text="联络我们" />

            <TableContainer>
                <Table aria-label="responsive table" size="small">
                    <TableBody>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                住址:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                709 E. Colorado Boulevard, Suite 270, Pasadena, CA 91101, USA
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                联络电话:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                626.795.7485
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "transparent", border: "none" }}>
                            <TableCell
                                align="right"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "40%", sm: "30%", md: "20%" },
                                }}
                            >
                                电子邮件信箱:
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: "teal",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                                    border: "none",
                                    width: { xs: "60%", sm: "70%", md: "80%" },
                                }}
                            >
                                {" "}
                                <em>
                                    <a href="mailto:info@worldwisersport.org">info@worldwisersport.org</a>
                                </em>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <hr />
            <SubTitle text="欢迎来访！" />
            <ResParagraphNoIndent>来访前，请事先联络我们，谢谢!</ResParagraphNoIndent>

            <hr />

            <SubTitle text="访问WWSC办公室的行驶路线(Google地图)" />
            <div>
                <ResponsiveIframe
                    title="WWSC Google地图"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6604.005481577774!2d-118.13583700000001!3d34.146272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c36801966f21%3A0xc4a93365b11ed05!2s709%20E%20Colorado%20Blvd%20%23270%2C%20Pasadena%2C%20CA%2091101!5e0!3m2!1sen!2sus!4v1696109017921!5m2!1sen!2sus"
                />
            </div>
        </div>
    );
}
