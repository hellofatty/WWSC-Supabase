/** @format */

import "./AddNotice.css";

import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { Button } from "reactstrap";

import { useFirestore } from "../../../hooks/useFirestore";
import { useTranslation } from "react-i18next";

export default function AddNotice() {
    const { t } = useTranslation("global");
    // const { i18n } = useTranslation();

    const [author, setAuthor] = useState("WWSC");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [lang, setLang] = useState("en");

    const [status, setStatus] = useState("");

    const [postedDate, setPostedDate] = useState("");

    const { addDocument, response } = useFirestore("notices");

    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
            author,
            title,
            content,
            excerpt,
            lang,
            slug: postedDate.concat("_", lang),
            status,
            postedDate: Timestamp.fromDate(new Date(postedDate)),
            year: new Date(postedDate).getFullYear().toString(),
            month: new Date(postedDate).toLocaleString("default", { month: "long" }),
        });

        reset();
    };

    const reset = () => {
        setAuthor("");
        setTitle("");
        setContent("");
        setExcerpt("");
        setLang("");
        setStatus("");
        setPostedDate("");
    };

    useEffect(() => {
        console.log("response", response.success);
        if (response.success) {
            setAuthor("");
            setTitle("");
            setContent("");
            setExcerpt("");
            setLang("");
            setStatus("");
            setPostedDate("");
        }
    }, [response.success]);

    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    <form className="train-form" onSubmit={handleSubmit}>
                        <div className="train-content">
                            {/* <h2>Input Training Record</h2> */}
                            <label className="train-input">
                                <span>Author:*</span>
                                <input
                                    required
                                    type="text"
                                    onChange={(e) => setAuthor(e.target.value)}
                                    value={author}
                                    className="edit-field"
                                />
                            </label>
                            <label className="train-input">
                                <span>Title:*</span>
                                <input
                                    required
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    className="edit-field"
                                />
                            </label>

                            <label className="train-input">
                                <span>Posted Date:*</span>
                                <input
                                    required
                                    type="date"
                                    onChange={(e) => setPostedDate(e.target.value)}
                                    value={postedDate}
                                    className="edit-field"
                                />
                            </label>
                            <label className="train-input">
                                <span>Language*:</span>
                                <select
                                    required
                                    onChange={(e) => setLang(e.target.value)}
                                    value={lang}
                                    className="edit-field"
                                >
                                    <option value="eng">English</option>
                                    <option value="zh-TW">繁體中文</option>
                                    <option value="zh-CN">简体中文</option>
                                </select>
                            </label>
                            <label className="train-input">
                                <span>Status*:</span>
                                <select
                                    required
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                    className="edit-field"
                                >
                                    <option value="Published">Published</option>
                                    <option value="Draft">Draft</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </label>
                            <label className="train-input">
                                <span>Content:*</span>
                                <input
                                    required
                                    type="textArea"
                                    onChange={(e) => setContent(e.target.value)}
                                    value={content}
                                    className="edit-field"
                                />
                            </label>
                            <label className="train-input">
                                <span>Excerpt:*</span>
                                <input
                                    required
                                    type="textArea"
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    value={excerpt}
                                    className="edit-field"
                                />
                            </label>
                        </div>
                        <div className="form-button">
                            <Button type="button" color="secondary" size="sm" onClick={reset}>
                                {t("referee.record.reset")}
                            </Button>
                            <Button color="primary" size="sm">
                                {t("referee.record.submit")}
                            </Button>
                        </div>
                    </form>
                    {/* <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="noticeTitle" sm={2}>
                                        Title*:
                                    </Label>

                                    <Input
                                        required
                                        id="noticeTitle"
                                        placeholder="Notice (MM/DD/YYYY)"
                                        type="text"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="noticeAuthor" sm={2}>
                                        Author*:
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
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="noticeLanuage" sm={2}>
                                        Language
                                    </Label>

                                    <Input
                                        id="noticeLanuage"
                                        name="select"
                                        type="select"
                                        value={lang}
                                        onChange={(e) => setLang(e.target.value)}
                                    >
                                        <option value="eng">English</option>
                                        <option value="zh-TW">繁體中文</option>
                                        <option value="zh-CN">简体中文</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="noticeStatus" sm={2}>
                                        Status
                                    </Label>

                                    <Input
                                        id="noticeStatus"
                                        name="noticeStatus"
                                        type="select"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="Published">Published</option>
                                        <option value="Draft">Draft</option>
                                        <option value="Pending">Pending</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="createdDate">Posted Date</Label>
                                    <Input
                                        id="createdDate"
                                        name="date"
                                        placeholder="Created Date"
                                        type="date"
                                        value={postedDate}
                                        onChange={(e) => setPostedDate(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            {/* <Col md={4}>
                                <FormGroup>
                                    <Label for="noticeStatus" sm={2}>
                                        Slug
                                    </Label>

                                    <Input
                                        id="noticeSlug"
                                        name="noticeSlug"
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                    >
                                        
                                    </Input>
                                </FormGroup>
                            </Col> */}
                    {/* </Row> */}
                    {/* <Col md={4}>
                                <FormGroup>
                                    <Label for="createdMonth">Created Month</Label>
                                    <Input
                                        id="createdMonth"
                                        // name="text"
                                        placeholder="Month"
                                        type="text"
                                        value={month}
                                        onChange={(e) => setMonth(e.target.value)}
                                    />
                                </FormGroup>
                            </Col> */}
                    {/* <Col md={4}>
                                <FormGroup>
                                    <Label for="createdYear">Created Year</Label>
                                    <Input
                                        id="createdYear"
                                        // name="text"
                                        placeholder="Year"
                                        type="text"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                    />
                                </FormGroup>
                            </Col> */}
                    {/* <FormGroup>
                            <Label for="noticeContent">Notice Content*:</Label>
                            <Input
                                id="noticeContent"
                                name="text"
                                type="textarea"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="noticeExcerpt">Notice Excerpt*:</Label>
                            <Input
                                id="noticeExcerpt"
                                name="text"
                                type="textarea"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                            />
                        </FormGroup>

                        <div className="form-button">
                            <Button type="button" color="secondary" size="sm" onClick={reset}>
                                {t("referee.record.reset")}
                            </Button>
                            <Button color="primary" size="sm" onClick={handleSubmit}>
                                {t("referee.record.submit")}
                            </Button>
                        </div>
                    </Form> */}
                </div>
            </div>
        </div>
    );
}
