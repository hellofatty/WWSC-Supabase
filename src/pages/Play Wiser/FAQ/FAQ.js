/** @format */

import CustomTab from "../../../components/CustomTab/CustomTab";
import { Container, useMediaQuery } from "@mui/material";
// import TextDrop from "./TextDrop";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { generalContent_1, serveContent_1, gameContent_1, mishitContent_1, interceptionContent_1 } from "./FAQContents";
import {
    generalContent_2,
    serveContent_2,
    gameContent_2,
    captureZoneContent_2,
    mishitContent_2,
    interceptionContent_2,
} from "./FAQContents";
import {
    generalContent_TW_1,
    serveContent_TW_1,
    gameContent_TW_1,
    mishitContent_TW_1,
    interceptionContent_TW_1,
} from "./FAQContentsTW";
import {
    generalContent_TW_2,
    serveContent_TW_2,
    gameContent_TW_2,
    captureZoneContent_TW_2,
    mishitContent_TW_2,
    interceptionContent_TW_2,
} from "./FAQContentsTW";
import {
    generalContent_CN_1,
    serveContent_CN_1,
    gameContent_CN_1,
    mishitContent_CN_1,
    interceptionContent_CN_1,
} from "./FAQContentsCN";
import {
    generalContent_CN_2,
    serveContent_CN_2,
    gameContent_CN_2,
    captureZoneContent_CN_2,
    mishitContent_CN_2,
    interceptionContent_CN_2,
} from "./FAQContentsCN";
import { useTranslation } from "react-i18next";

import "./FAQ.css";
import { useState } from "react";
import { PrimaryTitle, ResParagraphNoIndent } from "../../../components/Text/Title/Title";

export default function FAQ() {
    const {i18n } = useTranslation("global");
    const mb = useMediaQuery("(max-width:600px)");

    const lang = i18n.language;
    const [index, setIndex] = useState(0);

    const subContent_1 = [
        { title: "General", content: generalContent_1 },
        { title: "Serving", content: serveContent_1 },
        { title: "Contesting", content: gameContent_1 },
        // { title: "Capture Zone", content: captureZoneContent },
        { title: "Mishit", content: mishitContent_1 },
        { title: "Interception", content: interceptionContent_1 },
    ];

    const Content_1 = (
        <div>
            {!mb ? (
                <CustomTab content={subContent_1} />
            ) : (
                <AccordionGroup size="sm" variant="soft" transition="0.2s ease">
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                General
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{generalContent_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Serving
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{serveContent_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Contesting
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{gameContent_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Mishit
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{mishitContent_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Interception
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{interceptionContent_1}</AccordionDetails>
                    </Accordion>{" "}
                </AccordionGroup>
            )}
        </div>
    );

    const subContent_2 = [
        { title: "General", content: generalContent_2 },
        { title: "Serving", content: serveContent_2 },
        { title: "Contesting", content: gameContent_2 },
        { title: "Capture Zone", content: captureZoneContent_2 },
        { title: "Mishit", content: mishitContent_2 },
        { title: "Interception", content: interceptionContent_2 },
    ];

    const Content_2 = (
        <div>
           {!mb ? (
                <CustomTab content={subContent_2} />
            ) : (
                <AccordionGroup size="sm" variant="soft" transition="0.2s ease">
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                General
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{generalContent_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Serving
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{serveContent_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Contesting
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{gameContent_2}</AccordionDetails>
                        </Accordion>
                        <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Capture Zone
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{captureZoneContent_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Mishit
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{mishitContent_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                Interception
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{interceptionContent_1}</AccordionDetails>
                    </Accordion>{" "}
                </AccordionGroup>
            )}
        </div>
    );

    const content = [
        { title: "for Competition", content: Content_1 },
        { title: "for Promotion", content: Content_2 },
    ];

    // =========繁體中文==========

    const subContent_TW_1 = [
        { title: "一般比賽", content: generalContent_TW_1 },
        { title: "發球", content: serveContent_TW_1 },
        { title: "競技", content: gameContent_TW_1 },
        // { title: "圍捕線", content: captureZoneContent_TW },
        { title: "誤擊", content: mishitContent_TW_1 },
        { title: "攔擊", content: interceptionContent_TW_1 },
    ];

    const Content_TW_1 = (
        <div>
            {!mb ? (
                <CustomTab content={subContent_TW_1} />
            ) : (
                <AccordionGroup size="sm" variant="soft" transition="0.2s ease">
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                一般比賽
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{generalContent_TW_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                發球
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{serveContent_TW_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                競技
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{gameContent_TW_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                誤擊
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{mishitContent_TW_1}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                攔擊
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{interceptionContent_TW_1}</AccordionDetails>
                    </Accordion>{" "}
                </AccordionGroup>
            )}
        </div>
    );

    const subContent_TW_2 = [
        { title: "一般比賽", content: generalContent_TW_2 },
        { title: "發球", content: serveContent_TW_2 },
        { title: "競技", content: gameContent_TW_2 },
        { title: "圍捕線", content: captureZoneContent_TW_2 },
        { title: "誤擊", content: mishitContent_TW_2 },
        { title: "攔擊", content: interceptionContent_TW_2 },
    ];

    const Content_TW_2 = (
        <div>
            {!mb ? (
                <CustomTab content={subContent_TW_2} />
            ) : (
                <AccordionGroup size="sm" variant="soft" transition="0.2s ease">
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                一般比賽
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{generalContent_TW_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                發球
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{serveContent_TW_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                競技
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{gameContent_TW_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                圍捕線
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{captureZoneContent_TW_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                誤擊
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{mishitContent_TW_2}</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <div
                                className="page-subtitle2"
                                style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                            >
                                攔擊
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>{interceptionContent_TW_2}</AccordionDetails>
                    </Accordion>{" "}
                </AccordionGroup>
            )}
        </div>
    );

    const content_TW = [
        { title: "適用於競賽", content: Content_TW_1 },
        { title: "適用於一般推廣", content: Content_TW_2 },
    ];

    const subContent_CN_1 = [
        { title: "一般比赛", content: generalContent_CN_1 },
        { title: "发球", content: serveContent_CN_1 },
        { title: "竞技", content: gameContent_CN_1 },
        // { title: "围捕线", content: captureZoneContent_TW },
        { title: "误击", content: mishitContent_CN_1 },
        { title: "拦击", content: interceptionContent_CN_1 },
    ];

    const Content_CN_1 = (
        <div>
        {!mb ? (
            <CustomTab content={subContent_CN_1} />
        ) : (
            <AccordionGroup size="sm" variant="soft" transition="0.2s ease">
                <Accordion
                    expanded={index === 0}
                    onChange={(event, expanded) => {
                        setIndex(expanded ? 0 : null);
                    }}
                >
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            一般比赛
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{generalContent_CN_1}</AccordionDetails>
                        </Accordion>
                        <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            发球
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{serveContent_CN_1}</AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            競技
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{gameContent_CN_1}</AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            误击
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{mishitContent_CN_1}</AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            拦击
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{interceptionContent_CN_1}</AccordionDetails>
                </Accordion>{" "}
            </AccordionGroup>
        )}
    </div>
    );

    const subContent_CN_2 = [
        { title: "一般比赛", content: generalContent_CN_2 },
        { title: "发球", content: serveContent_CN_2 },
        { title: "竞技", content: gameContent_CN_2 },
        { title: "围捕线", content: captureZoneContent_CN_2 },
        { title: "误击", content: mishitContent_CN_2 },
        { title: "拦击", content: interceptionContent_CN_2 },
    ];

    const Content_CN_2 = (
        <div>
        {!mb ? (
            <CustomTab content={subContent_CN_2} />
        ) : (
            <AccordionGroup size="sm" variant="soft" transition="0.2s ease">
                <Accordion
                    expanded={index === 0}
                    onChange={(event, expanded) => {
                        setIndex(expanded ? 0 : null);
                    }}
                >
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            一般比赛
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{generalContent_CN_2}</AccordionDetails>
                        </Accordion>
                        <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            发球
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{serveContent_CN_2}</AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            競技
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{gameContent_CN_2}</AccordionDetails>
                        </Accordion>
                        <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            围捕线
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{captureZoneContent_CN_2}</AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            误击
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{mishitContent_CN_2}</AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <div
                            className="page-subtitle2"
                            style={{ color: "grey", marginLeft: "6px", fontWeight: "normal" }}
                        >
                            拦击
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>{interceptionContent_CN_2}</AccordionDetails>
                </Accordion>{" "}
            </AccordionGroup>
        )}
    </div>
    );

    const content_CN = [
        { title: "适用於竞赛", content: Content_CN_1 },
        { title: "适用於一般推广", content: Content_CN_2 },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            {lang === "en" && (
                <>
                    <PrimaryTitle text="Frequently Asked Questions (FAQs)"/>
                    <ResParagraphNoIndent>
                        The following are frequently asked questions and responses regarding Wiser sport games:
                    </ResParagraphNoIndent>
                    <ul
                        style={
                            !mb
                                ? { color: "teal", fontSize: "0.9rem", lineHeight: "2" }
                                : { color: "teal", fontSize: "0.75rem", lineHeight: "2" }
                        }
                    >
                        <li>
                            (1) First, please identify the relevant <b>rules handbook </b>pertaining to your questions.{" "}
                        </li>
                        <li>
                            (2) Next, select the relevant <b>"category" </b>subtab that corresponds to your questions;{" "}
                        </li>
                        <li>
                            (3) Finally, click on <b>the topic of selected question </b>to open and view our
                            responFirst, please identify the relevant <b>rules handbook </b>pertaining to your
                            questions.{" "}
                        </li>
                    </ul>

                    <CustomTab content={content} />
                </>
            )}
            {lang === "zh-TW" && (
                <>
                      <PrimaryTitle text="常見問題解答 (FAQs)"/>
                  
                    <ResParagraphNoIndent>下列為有關Wiser運動比賽時常見的問題和解答:</ResParagraphNoIndent>
                    <ul
                        style={
                            !mb
                                ? { color: "teal", fontSize: "0.9rem", lineHeight: "2" }
                                : { color: "teal", fontSize: "0.75rem", lineHeight: "2" }
                        }
                    >
                        <li>
                            （1）首先，請選擇<b>「適用的規則手冊」</b>；
                        </li>
                        <li>
                            （2）接著請選擇相關的<b>「規則問題類別」</b>；
                        </li>
                        <li>
                            （3）最後，請點擊選擇的<b>「問題標題」</b>來打開看到我們的答覆。
                        </li>
                    </ul>

                    <CustomTab content={content_TW} />
                </>
            )}

            {lang === "zh-CN" && (
                <>
                       <PrimaryTitle text="常见问题解答 (FAQs)"/>
                

                    <ResParagraphNoIndent>下列为有关Wiser运动比赛时常见的问题和解答:</ResParagraphNoIndent>
                    <ul
                        style={
                            !mb
                                ? { color: "teal", fontSize: "0.9rem", lineHeight: "2" }
                                : { color: "teal", fontSize: "0.75rem", lineHeight: "2" }
                        }
                    >
                        <li>
                            （1）首先，请选择<b>「适用的规则手册」</b>；
                        </li>
                        <li>
                            （2）接著请选择相关的<b>「规则问题类别」</b>；
                        </li>
                        <li>
                            （3）最後，请点击选择的<b>「问题标题」</b>来打开看到我们的答覆。
                        </li>
                    </ul>

                    <CustomTab content={content_CN} />
                </>
            )}
        </Container>
    );
}
