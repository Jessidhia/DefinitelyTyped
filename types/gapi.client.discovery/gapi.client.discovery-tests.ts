/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load("client", () => {
    /** now we can use gapi.client */
    gapi.client.load("discovery", "v1", () => {
        /** now we can use gapi.client.discovery */

        run();
    });

    async function run() {
        /** Retrieve the description of a particular version of an api. */
        await gapi.client.apis.getRest({
            api: "api",
            version: "version"
        });
        /** Retrieve the list of APIs supported at this endpoint. */
        await gapi.client.apis.list({
            name: "name",
            preferred: true
        });
    }
});
