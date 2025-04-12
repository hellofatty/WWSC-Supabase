/** @format */

import "./AddNotice.css";

import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { toast } from "react-toastify";
import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import Button from '@mui/material/Button';

export default function AddNotice({ toggle }) {
    const { t, i18n } = useTranslation("global");

    const dayjs = require("dayjs");
    const [author, setAuthor] = useState("WWSC");
    const [title, setTitle] = useState("");
    const [shortTitle, setShortTitle] = useState("");
    const [content, setContent] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [titleTw, setTitleTw] = useState("");
    const [shortTitleTw, setShortTitleTw] = useState("");
    const [contentTw, setContentTw] = useState("");
    const [excerptTw, setExcerptTw] = useState("");
    const [titleCn, setTitleCn] = useState("");
    const [shortTitleCn, setShortTitleCn] = useState("");
    const [contentCn, setContentCn] = useState("");
    const [excerptCn, setExcerptCn] = useState("");

    // const [lang, setLang] = useState("en");

    const [status, setStatus] = useState("");

    const [postedDate, setPostedDate] = useState("");

    const { addDocument, response } = useFirestore("notices");

    const showToastMessage = () => {
        toast.success(i18n.t("admin.notice-form.add-success-message"));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
            author,
            title,
            shortTitle,
            content,
            excerpt,
            titleTw,
            shortTitleTw,
            contentTw,
            excerptTw,
            titleCn,
            shortTitleCn,
            contentCn,
            excerptCn,
            slug: dayjs(postedDate).format("MM-DD-YYYY"),
            status,
            postedDate: Timestamp.fromDate(new Date(postedDate)),
            year: new Date(postedDate).getFullYear().toString(),
            month: new Date(postedDate).toLocaleString("default", { month: "long" }),
        });

        reset();
        showToastMessage();
        toggle();
    };

    const reset = () => {
        setAuthor("");
        setTitle("");
        setShortTitle("");
        setContent("");
        setExcerpt("");
        setTitleTw("");
        setShortTitleTw("");
        setContentTw("");
        setExcerptTw("");
        setTitleCn("");
        setShortTitleCn("");
        setContentCn("");
        setExcerptCn("");
        setStatus("");
        setPostedDate("");
    };

    useEffect(() => {
        console.log("response", response.success);
        if (response.success) {
            setAuthor("");
            setTitle("");
            setShortTitle("");
            setContent("");
            setExcerpt("");
            setTitleTw("");
            setShortTitleTw("");
            setContentTw("");
            setExcerptTw("");
            setTitleCn("");
            setShortTitleCn("");
            setContentCn("");
            setExcerptCn("");
            setStatus("");
            setPostedDate("");
        }
    }, [response.success]);

    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <h5>English</h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label sm={2} size="sm">
                                                    Title*:
                                                </Label>

                                                <Input
                                                    required
                                                    type="text"
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    value={title}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                                    Short Title*:
                                                </Label>

                                                <Input
                                                    required
                                                    placeholder="Notice (MM/DD/YYYY)"
                                                    type="text"
                                                    onChange={(e) => setShortTitle(e.target.value)}
                                                    value={shortTitle}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <FormGroup>
                                        <Label for="noticeContent" size="sm">
                                            Notice Content*:
                                        </Label>
                                        <Input
                                            required
                                            id="noticeContent"
                                            name="text"
                                            type="textarea"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            style={{ height: "600" }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="noticeExcerpt" size="sm">
                                            Notice Excerpt*:
                                        </Label>
                                        <Input
                                            required
                                            id="noticeExcerpt"
                                            name="text"
                                            type="textarea"
                                            value={excerpt}
                                            onChange={(e) => setExcerpt(e.target.value)}
                                            style={{ height: "400" }}
                                        />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    <h5>繁體中文</h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label sm={2} size="sm">
                                                    標題*:
                                                </Label>

                                                <Input
                                                    required
                                                    type="text"
                                                    onChange={(e) => setTitleTw(e.target.value)}
                                                    value={titleTw}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                                    短標題*:
                                                </Label>

                                                <Input
                                                    required
                                                    placeholder="通知 (MM/DD/YYYY)"
                                                    type="text"
                                                    onChange={(e) => setShortTitleTw(e.target.value)}
                                                    value={shortTitleTw}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <FormGroup>
                                        <Label for="noticeContentTw" size="sm">
                                            通知內容*:
                                        </Label>
                                        <Input
                                            required
                                            id="noticeContentTw"
                                            name="text"
                                            type="textarea"
                                            value={contentTw}
                                            onChange={(e) => setContentTw(e.target.value)}
                                            style={{ height: "600" }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="noticeExcerptTw" size="sm">
                                            通知摘要*:
                                        </Label>
                                        <Input
                                            required
                                            id="noticeExcerptTw"
                                            name="text"
                                            type="textarea"
                                            value={excerptTw}
                                            onChange={(e) => setExcerptTw(e.target.value)}
                                            style={{ height: "400" }}
                                        />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    <h5>简体中文</h5>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label sm={2} size="sm">
                                                    标题*:
                                                </Label>

                                                <Input
                                                    required
                                                    type="text"
                                                    onChange={(e) => setTitleCn(e.target.value)}
                                                    value={titleCn}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label sm={2} size="sm" style={{ textWrap: "nowrap" }}>
                                                    短标题*:
                                                </Label>

                                                <Input
                                                    required
                                                    placeholder="通知 (MM/DD/YYYY)"
                                                    type="text"
                                                    onChange={(e) => setShortTitleCn(e.target.value)}
                                                    value={shortTitleCn}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <FormGroup>
                                        <Label for="noticeContentTw" size="sm">
                                            通知内容*:
                                        </Label>
                                        <Input
                                            required
                                            id="noticeContentTw"
                                            name="text"
                                            type="textarea"
                                            value={contentCn}
                                            onChange={(e) => setContentCn(e.target.value)}
                                            style={{ height: "600" }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="noticeExcerptCn" size="sm">
                                            通知摘要*:
                                        </Label>
                                        <Input
                                            required
                                            id="noticeExcerptCn"
                                            name="text"
                                            type="textarea"
                                            value={excerptCn}
                                            onChange={(e) => setExcerptCn(e.target.value)}
                                            style={{ height: "400" }}
                                        />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <br />
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="noticeAuthor" sm={2} size="sm">
                                        {t("admin.notice-form.author")}*:
                                    </Label>

                                    <Input
                                        required
                                        id="noticeAuthor"
                                        placeholder="WWSC"
                                        type="text"
                                        defaultValue="WWSC"
                                        onChange={(e) => setAuthor(e.target.value)}
                                        value={author}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={4}>
                                <FormGroup>
                                    <Label for="noticeStatus" sm={2} size="sm">
                                        {t("admin.notice-form.status")}*:
                                    </Label>

                                    <Input
                                        required
                                        id="noticeStatus"
                                        name="noticeStatus"
                                        type="select"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value=""> {t("admin.notice-form.select-status")}</option>
                                        <option value="Published">{t("admin.notice-form.published")}</option>
                                        <option value="Draft">{t("admin.notice-form.draft")}</option>
                                        <option value="Pending">{t("admin.notice-form.pending")}</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="postDate" size="sm">
                                        {t("admin.notice-form.posted-date")}*
                                    </Label>
                                    <Input
                                        required
                                        id="postDate"
                                        name="date"
                                        placeholder="Created Date"
                                        type="date"
                                        value={postedDate}
                                        onChange={(e) => setPostedDate(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "16px", marginTop:"16px" }}>
                            <Button
                                type="button"
                                color="secondary"
                                size="sm"
                                onClick={reset}
                                style={{ width: "120px" }}
                            >
                                {t("referee.record.reset")}
                            </Button>
                            <Button color="primary" size="sm" style={{ width: "120px" }}>
                                {t("referee.record.submit")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
