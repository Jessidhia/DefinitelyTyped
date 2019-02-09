/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load("client", () => {
    /** now we can use gapi.client */
    gapi.client.load("customsearch", "v1", () => {
        /** now we can use gapi.client.customsearch */

        run();
    });

    async function run() {
        /** Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results. */
        await gapi.client.cse.list({
            c2coff: "c2coff",
            cr: "cr",
            cx: "cx",
            dateRestrict: "dateRestrict",
            exactTerms: "exactTerms",
            excludeTerms: "excludeTerms",
            fileType: "fileType",
            filter: "filter",
            gl: "gl",
            googlehost: "googlehost",
            highRange: "highRange",
            hl: "hl",
            hq: "hq",
            imgColorType: "imgColorType",
            imgDominantColor: "imgDominantColor",
            imgSize: "imgSize",
            imgType: "imgType",
            linkSite: "linkSite",
            lowRange: "lowRange",
            lr: "lr",
            num: 21,
            orTerms: "orTerms",
            q: "q",
            relatedSite: "relatedSite",
            rights: "rights",
            safe: "safe",
            searchType: "searchType",
            siteSearch: "siteSearch",
            siteSearchFilter: "siteSearchFilter",
            sort: "sort",
            start: 31
        });
    }
});
