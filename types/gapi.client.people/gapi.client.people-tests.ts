/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load("client", () => {
    /** now we can use gapi.client */
    gapi.client.load("people", "v1", () => {
        /** now we can use gapi.client.people */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = "<<PUT YOUR CLIENT ID HERE>>";
        const scope = [
            /** Manage your contacts */
            "https://www.googleapis.com/auth/contacts",
            /** View your contacts */
            "https://www.googleapis.com/auth/contacts.readonly",
            /** Know the list of people in your circles, your age range, and language */
            "https://www.googleapis.com/auth/plus.login",
            /** View your street addresses */
            "https://www.googleapis.com/auth/user.addresses.read",
            /** View your complete date of birth */
            "https://www.googleapis.com/auth/user.birthday.read",
            /** View your email addresses */
            "https://www.googleapis.com/auth/user.emails.read",
            /** View your phone numbers */
            "https://www.googleapis.com/auth/user.phonenumbers.read",
            /** View your email address */
            "https://www.googleapis.com/auth/userinfo.email",
            /** View your basic profile info */
            "https://www.googleapis.com/auth/userinfo.profile"
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
        /**
         * Get a list of contact groups owned by the authenticated user by specifying
         * a list of contact group resource names.
         */
        await gapi.client.contactGroups.batchGet({
            maxMembers: 1,
            resourceNames: "resourceNames"
        });
        /** Create a new contact group owned by the authenticated user. */
        await gapi.client.contactGroups.create({});
        /**
         * Delete an existing contact group owned by the authenticated user by
         * specifying a contact group resource name.
         */
        await gapi.client.contactGroups.delete({
            deleteContacts: true,
            resourceName: "resourceName"
        });
        /**
         * Get a specific contact group owned by the authenticated user by specifying
         * a contact group resource name.
         */
        await gapi.client.contactGroups.get({
            maxMembers: 1,
            resourceName: "resourceName"
        });
        /**
         * List all contact groups owned by the authenticated user. Members of the
         * contact groups are not populated.
         */
        await gapi.client.contactGroups.list({
            pageSize: 1,
            pageToken: "pageToken",
            syncToken: "syncToken"
        });
        /**
         * Update the name of an existing contact group owned by the authenticated
         * user.
         */
        await gapi.client.contactGroups.update({
            resourceName: "resourceName"
        });
        /** Create a new contact and return the person resource for that contact. */
        await gapi.client.people.createContact({
            parent: "parent"
        });
        /** Delete a contact person. Any non-contact data will not be deleted. */
        await gapi.client.people.deleteContact({
            resourceName: "resourceName"
        });
        /**
         * Provides information about a person by specifying a resource name. Use
         * `people/me` to indicate the authenticated user.
         * <br>
         * The request throws a 400 error if 'personFields' is not specified.
         */
        await gapi.client.people.get({
            personFields: "personFields",
            "requestMask.includeField": "requestMask.includeField",
            resourceName: "resourceName"
        });
        /**
         * Provides information about a list of specific people by specifying a list
         * of requested resource names. Use `people/me` to indicate the authenticated
         * user.
         * <br>
         * The request throws a 400 error if 'personFields' is not specified.
         */
        await gapi.client.people.getBatchGet({
            personFields: "personFields",
            "requestMask.includeField": "requestMask.includeField",
            resourceNames: "resourceNames"
        });
        /**
         * Update contact data for an existing contact person. Any non-contact data
         * will not be modified.
         *
         * The request throws a 400 error if `updatePersonFields` is not specified.
         * <br>
         * The request throws a 400 error if `person.metadata.sources` is not
         * specified for the contact to be updated.
         * <br>
         * The request throws a 412 error if `person.metadata.sources.etag` is
         * different than the contact's etag, which indicates the contact has changed
         * since its data was read. Clients should get the latest person and re-apply
         * their updates to the latest person.
         */
        await gapi.client.people.updateContact({
            resourceName: "resourceName",
            updatePersonFields: "updatePersonFields"
        });
    }
});
