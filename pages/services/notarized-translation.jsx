import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

import Layout from "../../src/shared/components/Layout";
import ServicePage from "../../src/client/ServicePage";
import ServiceArticle from "../../src/shared/components/ServiceArticle";

const ServicesPage = () => {

    const { t } = useTranslation("notarized-translation");
    const content = t("content", {returnObjects: true});

    return (
        <Layout fileName="notarized-translation-page">
            <ServicePage img="/img/Services/notary3.png" title={t("title")} btnText={t("btn")} >
                <ServiceArticle content={content} />
            </ServicePage>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["navbar", "notarized-translation", "footer", "main", "notarized-translation-page"])),
    },
});

export default ServicesPage;