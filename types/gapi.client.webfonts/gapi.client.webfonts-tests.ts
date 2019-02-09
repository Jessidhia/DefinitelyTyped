/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load("client", () => {
    /** now we can use gapi.client */
    gapi.client.load("webfonts", "v1", () => {
        /** now we can use gapi.client.webfonts */

        run();
    });

    async function run() {
        /** Retrieves the list of fonts currently served by the Google Fonts Developer API */
        await gapi.client.webfonts.list({
            sort: "sort"
        });
    }
});
