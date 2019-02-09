/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load("client", () => {
    /** now we can use gapi.client */
    gapi.client.load("gmail", "v1", () => {
        /** now we can use gapi.client.gmail */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = "<<PUT YOUR CLIENT ID HERE>>";
        const scope = [
            /** Read, send, delete, and manage your email */
            "https://mail.google.com/",
            /** Manage drafts and send emails */
            "https://www.googleapis.com/auth/gmail.compose",
            /** Insert mail into your mailbox */
            "https://www.googleapis.com/auth/gmail.insert",
            /** Manage mailbox labels */
            "https://www.googleapis.com/auth/gmail.labels",
            /** View your email message metadata such as labels and headers, but not the email body */
            "https://www.googleapis.com/auth/gmail.metadata",
            /** View and modify but not delete your email */
            "https://www.googleapis.com/auth/gmail.modify",
            /** View your email messages and settings */
            "https://www.googleapis.com/auth/gmail.readonly",
            /** Send email on your behalf */
            "https://www.googleapis.com/auth/gmail.send",
            /** Manage your basic mail settings */
            "https://www.googleapis.com/auth/gmail.settings.basic",
            /** Manage your sensitive mail settings, including who can manage your mail */
            "https://www.googleapis.com/auth/gmail.settings.sharing"
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Gets the current user's Gmail profile. */
        await gapi.client.users.getProfile({
            userId: "userId"
        });
        /** Stop receiving push notifications for the given user mailbox. */
        await gapi.client.users.stop({
            userId: "userId"
        });
        /** Set up or update a push notification watch on the given user mailbox. */
        await gapi.client.users.watch({
            userId: "userId"
        });
    }
});
