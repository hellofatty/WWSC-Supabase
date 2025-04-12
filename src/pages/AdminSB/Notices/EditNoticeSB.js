/** @format */

import { useState } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import "./AddNotice.css";

export default function EditNoticeSB({ notice, toggle }) {
    const { t, i18n } = useTranslation("global");
    const lang = i18n.language;

    const [isPending, setIsPending] = useState(false);

    // const dayjs = require("dayjs");

     // Form states
     const [author, setAuthor] = useState(notice.author);
     const [title, setTitle] = useState(notice.title);
     const [shortTitle, setShortTitle] = useState(notice.short_title);
     const [content, setContent] = useState(notice.content);
     const [excerpt, setExcerpt] = useState(notice.excerpt);
     
     const [titleTw, setTitleTw] = useState(notice.title_tw);
     const [shortTitleTw, setShortTitleTw] = useState(notice.short_title_tw);
     const [contentTw, setContentTw] = useState(notice.content_tw);
     const [excerptTw, setExcerptTw] = useState(notice.excerpt_tw);
     
     const [titleCn, setTitleCn] = useState(notice.title_cn);
     const [shortTitleCn, setShortTitleCn] = useState(notice.short_title_cn);
     const [contentCn, setContentCn] = useState(notice.content_cn);
     const [excerptCn, setExcerptCn] = useState(notice.excerpt_cn);
     
     const [status, setStatus] = useState(notice.status);
     const [postedDate, setPostedDate] = useState(notice.posted_date);

    // const showToastMessage = () => {
    //     toast.success(i18n.t("admin.notice-form.update-success-message"));
    // };

    const handleUpdate = async () => {
        setIsPending(true);
        try {
            const { error } = await supabase
                .from('notices')
                .update({
                    author,
                    title,
                    short_title: shortTitle,
                    content,
                    excerpt,
                    title_tw: titleTw,
                    short_title_tw: shortTitleTw,
                    content_tw: contentTw,
                    excerpt_tw: excerptTw,
                    title_cn: titleCn,
                    short_title_cn: shortTitleCn,
                    content_cn: contentCn,
                    excerpt_cn: excerptCn,
                    slug: dayjs(postedDate).format("MM-DD-YYYY"),
                    status,
                    posted_date: postedDate,
                    year: new Date(postedDate).getFullYear().toString(),
                    month: new Date(postedDate).toLocaleString("default", { month: "long" }),
                    updated_at: new Date()
                })
                .eq('id', notice.id);

            if (error) throw error;

            toast.success(t("admin.notice-form.update-success-message"));
            toggle();
        } catch (error) {
            console.error('Error updating notice:', error);
            toast.error(t("admin.notice-form.update-error-message"));
        } finally {
            setIsPending(false);
        }
    };

    console.log(notice.id, author, postedDate, status, lang, notice.slug);

    return (
        <div className="referee-home">
            <div className="container train-container">
                <div className="training">
                    {lang === "en" && (
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor="noticeTitle" sm={2} size="sm">
                                            {t("admin.notice-form.title")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeTitle"
                                            name="title"
                                            type="text"
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label
                                            htmlFor="noticeShortTitle"
                                            sm={2}
                                            size="sm"
                                            style={{ textWrap: "nowrap" }}
                                        >
                                            {t("admin.notice-form.short-title")}*:
                                        </Label>

                                        <Input
                                            id="noticeShortTitle"
                                            required
                                            placeholder="Notice (MM/DD/YYYY)"
                                            name="shortTitle"
                                            type="text"
                                            onChange={(e) => setShortTitle(e.target.value)}
                                            value={shortTitle}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label htmlFor="noticeAuthor" sm={2} size="sm">
                                            {t("admin.notice-form.author")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeAuthor"
                                            name="author"
                                            placeholder="WWSC"
                                            type="text"
                                            defaultValue="WWSC"
                                            onChange={(e) => setAuthor(e.target.value)}
                                            value={author}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    {/* <FormGroup>
                                    <Label htmlFor="noticeLanuage" sm={2} size="sm">
                                        {t("admin.notice-form.language")}*
                                    </Label>

                                    <Input
                                        required
                                        id="noticeLanuage"
                                        name="lang"
                                        type="select"
                                        value={lang}
                                        onChange={(e) => setLang(e.target.value)}
                                    >
                                        <option value="">{t("admin.notice-form.select-lang")}</option>
                                        <option value="en">English</option>
                                        <option value="zh-TW">繁體中文</option>
                                        <option value="zh-CN">简体中文</option>
                                    </Input>
                                </FormGroup> */}
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label htmlFor="noticeStatus" sm={2} size="sm">
                                            {t("admin.notice-form.status")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeStatus"
                                            name="status"
                                            type="select"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option value="">{t("admin.notice-form.select-status")}</option>
                                            <option value="Published">{t("admin.notice-form.published")}</option>
                                            <option value="Draft">{t("admin.notice-form.draft")}</option>
                                            <option value="Pending">{t("admin.notice-form.pending")}</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label htmlFor="postedDate" size="sm">
                                    {t("admin.notice-form.posted-date")}*:
                                </Label>
                                <Input
                                    required
                                    id="postedDate"
                                    name="postedDate"
                                    placeholder="MM-DD-YYYY"
                                    type="date"
                                    value={postedDate}
                                    onChange={(e) => setPostedDate(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="noticeContent" size="sm">
                                    {t("admin.notice-form.content")}*:
                                </Label>
                                <Input
                                    required
                                    id="noticeContent"
                                    name="content"
                                    type="textarea"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    style={{ minHeight: "200px" }}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="noticeExcerpt" size="sm">
                                    {t("admin.notice-form.excerpt")}*:
                                </Label>
                                <Input
                                    required
                                    id="noticeExcerpt"
                                    name="excerpt"
                                    type="textarea"
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    style={{ minHeight: "100px" }}
                                />
                            </FormGroup>
                            <div style={{ margin: "auto", width: "150px" }}>
                                {/* <Button type="button" color="secondary" size="sm" onClick={reset}>
                                {t("referee.record.reset")}
                            </Button> */}
                                <Button color="primary" size="sm" onClick={handleUpdate} style={{ width: "100%" }}>
                                    {t("admin.notice-list.update-btn")}
                                </Button>
                            </div>
                        </Form>
                    )}
                     {lang === "zh-TW" && (
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor="noticeTitleTw" sm={2} size="sm">
                                            {t("admin.notice-form.title")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeTitleTw"
                                            name="titleTw"
                                            type="text"
                                            onChange={(e) => setTitleTw(e.target.value)}
                                            value={titleTw}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label
                                            htmlFor="noticeShortTitleTw"
                                            sm={2}
                                            size="sm"
                                            style={{ textWrap: "nowrap" }}
                                        >
                                            {t("admin.notice-form.short-title")}*:
                                        </Label>

                                        <Input
                                            id="noticeShortTitleTw"
                                            required
                                            placeholder="通知 (MM/DD/YYYY)"
                                            name="shortTitleTw"
                                            type="text"
                                            onChange={(e) => setShortTitleTw(e.target.value)}
                                            value={shortTitleTw}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label htmlFor="noticeAuthor" sm={2} size="sm">
                                            {t("admin.notice-form.author")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeAuthor"
                                            name="author"
                                            placeholder="WWSC"
                                            type="text"
                                            defaultValue="WWSC"
                                            onChange={(e) => setAuthor(e.target.value)}
                                            value={author}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    {/* <FormGroup>
                                    <Label htmlFor="noticeLanuage" sm={2} size="sm">
                                        {t("admin.notice-form.language")}*
                                    </Label>

                                    <Input
                                        required
                                        id="noticeLanuage"
                                        name="lang"
                                        type="select"
                                        value={lang}
                                        onChange={(e) => setLang(e.target.value)}
                                    >
                                        <option value="">{t("admin.notice-form.select-lang")}</option>
                                        <option value="en">English</option>
                                        <option value="zh-TW">繁體中文</option>
                                        <option value="zh-CN">简体中文</option>
                                    </Input>
                                </FormGroup> */}
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label htmlFor="noticeStatus" sm={2} size="sm">
                                            {t("admin.notice-form.status")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeStatus"
                                            name="status"
                                            type="select"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option value="">{t("admin.notice-form.select-status")}</option>
                                            <option value="Published">{t("admin.notice-form.published")}</option>
                                            <option value="Draft">{t("admin.notice-form.draft")}</option>
                                            <option value="Pending">{t("admin.notice-form.pending")}</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label htmlFor="postedDate" size="sm">
                                    {t("admin.notice-form.posted-date")}*:
                                </Label>
                                <Input
                                    required
                                    id="postedDate"
                                    name="postedDate"
                                    placeholder="MM-DD-YYYY"
                                    type="date"
                                    value={postedDate}
                                    onChange={(e) => setPostedDate(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="noticeContentTw" size="sm">
                                    {t("admin.notice-form.content")}*:
                                </Label>
                                <Input
                                    required
                                    id="noticeContentTw"
                                    name="contentTw"
                                    type="textarea"
                                    value={contentTw}
                                    onChange={(e) => setContentTw(e.target.value)}
                                    style={{ minHeight: "200px" }}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="noticeExcerptTw" size="sm">
                                    {t("admin.notice-form.excerpt")}*:
                                </Label>
                                <Input
                                    required
                                    id="noticeExcerptTw"
                                    name="excerptTw"
                                    type="textarea"
                                    value={excerptTw}
                                    onChange={(e) => setExcerptTw(e.target.value)}
                                    style={{ minHeight: "100px" }}
                                />
                            </FormGroup>
                            <div style={{ margin: "auto", width: "150px" }}>
                                {/* <Button type="button" color="secondary" size="sm" onClick={reset}>
                                {t("referee.record.reset")}
                            </Button> */}
                                <Button color="primary" size="sm" onClick={handleUpdate} style={{ width: "100%" }}>
                                    {t("admin.notice-list.update-btn")}
                                </Button>
                            </div>
                        </Form>
                    )}
                     {lang === "zh-CN" && (
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor="noticeTitleCn" sm={2} size="sm">
                                            {t("admin.notice-form.title")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeTitleCn"
                                            name="titleCn"
                                            type="text"
                                            onChange={(e) => setTitleCn(e.target.value)}
                                            value={titleCn}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label
                                            htmlFor="noticeShortTitleCn"
                                            sm={2}
                                            size="sm"
                                            style={{ textWrap: "nowrap" }}
                                        >
                                            {t("admin.notice-form.short-title")}*:
                                        </Label>

                                        <Input
                                            id="noticeShortTitleCn"
                                            required
                                            placeholder="通知 (MM/DD/YYYY)"
                                            name="shortTitleCn"
                                            type="text"
                                            onChange={(e) => setShortTitleCn(e.target.value)}
                                            value={shortTitleCn}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor="noticeAuthor" sm={2} size="sm">
                                            {t("admin.notice-form.author")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeAuthor"
                                            name="author"
                                            placeholder="WWSC"
                                            type="text"
                                            defaultValue="WWSC"
                                            onChange={(e) => setAuthor(e.target.value)}
                                            value={author}
                                        />
                                    </FormGroup>
                                </Col>
                               
                                    {/* <FormGroup>
                                    <Label htmlFor="noticeLanuage" sm={2} size="sm">
                                        {t("admin.notice-form.language")}*
                                    </Label>

                                    <Input
                                        required
                                        id="noticeLanuage"
                                        name="lang"
                                        type="select"
                                        value={lang}
                                        onChange={(e) => setLang(e.target.value)}
                                    >
                                        <option value="">{t("admin.notice-form.select-lang")}</option>
                                        <option value="en">English</option>
                                        <option value="zh-TW">繁體中文</option>
                                        <option value="zh-CN">简体中文</option>
                                    </Input>
                                </FormGroup> */}
                               
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor="noticeStatus" sm={2} size="sm">
                                            {t("admin.notice-form.status")}*:
                                        </Label>

                                        <Input
                                            required
                                            id="noticeStatus"
                                            name="status"
                                            type="select"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option value="">{t("admin.notice-form.select-status")}</option>
                                            <option value="Published">{t("admin.notice-form.published")}</option>
                                            <option value="Draft">{t("admin.notice-form.draft")}</option>
                                            <option value="Pending">{t("admin.notice-form.pending")}</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label htmlFor="postedDate" size="sm">
                                    {t("admin.notice-form.posted-date")}*:
                                </Label>
                                <Input
                                    required
                                    id="postedDate"
                                    name="postedDate"
                                    placeholder="MM-DD-YYYY"
                                    type="date"
                                    value={postedDate}
                                    onChange={(e) => setPostedDate(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="noticeContentCn" size="sm">
                                    {t("admin.notice-form.content")}*:
                                </Label>
                                <Input
                                    required
                                    id="noticeContentCn"
                                    name="contentCn"
                                    type="textarea"
                                    value={contentCn}
                                    onChange={(e) => setContentCn(e.target.value)}
                                    style={{ minHeight: "200px" }}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="noticeExcerptCn" size="sm">
                                    {t("admin.notice-form.excerpt")}*:
                                </Label>
                                <Input
                                    required
                                    id="noticeExcerptCn"
                                    name="excerptCn"
                                    type="textarea"
                                    value={excerptCn}
                                    onChange={(e) => setExcerptCn(e.target.value)}
                                    style={{ minHeight: "100px" }}
                                />
                            </FormGroup>
                            <div style={{ margin: "auto", width: "150px" }}>
                                {/* <Button type="button" color="secondary" size="sm" onClick={reset}>
                                {t("referee.record.reset")}
                            </Button> */}
                                <Button
                                    color="primary"
                                    size="sm"
                                    onClick={handleUpdate}
                                    style={{ width: "100%" }}
                                    disabled={isPending}>
                                     {isPending ? t("general.loading") : t("admin.notice-list.update-btn")}
                                </Button>
                            </div>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
}
