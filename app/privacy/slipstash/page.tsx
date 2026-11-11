import styles from "./policy.module.css";

export const metadata = {
    title: "SlipStash Privacy Policy",
};

export default function SlipStashPrivacy() {
    return (
        <main className={styles.policy}>

            <h1>SlipStash Privacy Policy</h1>
            <p className={styles.updated}>Last updated: 11 November 2026</p>
            <p>
                SlipStash is an expense tracking app for Android, created by Odwa
                Mtatambi (“I”, “me”). This policy explains what data the app stores,
                where it goes, and how you can delete it.
            </p>
            <p>
                Contact: <a href="mailto:odwamtatambi@gmail.com">odwamtatambi@gmail.com</a>
            </p>

            <h2>The short version</h2>
            <ul className={styles.summary}>
                <li>
                    SlipStash has no account, email, name or password. It creates a random
                    anonymous ID for you automatically.
                </li>
                <li>
                    Your expenses and receipt photos are saved on your phone first, and
                    then backed up to a cloud database (Google Firebase).
                </li>
                <li>
                    I don’t sell your data, I don’t show ads, and I don’t use analytics or
                    tracking.
                </li>
                <li>You can delete everything from inside the app at any time.</li>
            </ul>

            <h2>What the app collects</h2>
            <p>
                <strong>Expense information you enter.</strong> For each expense: the
                amount, the category, an optional note, and the date. The note is free
                text, so please don’t put personal details in it.
            </p>
            <p>
                <strong>Receipt photos (optional).</strong> If you take a photo of a
                receipt, the app stores it on your phone. A compressed copy is
                uploaded to the cloud database (Google Firestore) under your anonymous
                ID. The app uses your phone’s camera app to take the photo, so it does
                not ask for camera permission and does not read your photo gallery.
            </p>
            <p>
                <strong>An anonymous ID.</strong> When you first open the app, Firebase
                Authentication creates a random user ID for this installation. It is not
                linked to your name, email address or phone number. Firebase may also
                create technical identifiers for the app installation so that its
                services work.
            </p>
            <p>
                <strong>What the app does not collect.</strong> Your name, email
                address, phone number, contacts, location, or advertising ID. The app
                does not use analytics, advertising or tracking services.
            </p>
            <p>
                Like any online service, Google’s servers may process technical
                information such as your IP address when your phone connects to them.
                That is part of operating the service, and I don’t use it to identify
                you.
            </p>

            <h2>How your data is used</h2>
            <p>
                Your data is used only to run the app: to show your expenses and monthly
                summary, and to keep a backup in the cloud so that syncing works. I
                don’t use it for advertising or profiling, and I don’t sell or rent it.
            </p>

            <h2>Where your data is stored</h2>
            <p>
                <strong>On your phone.</strong> In the app’s private storage, in a local
                database and private files.
            </p>
            <p>
                <strong>In the cloud.</strong> In Google Cloud Firestore, a database
                provided by Google through Firebase, under your anonymous ID. Google
                acts as a service provider that stores and processes the data for me.
                Data is encrypted in transit, and the database rules only allow each
                anonymous ID to read and write its own data. The data is stored in
                Google’s Johannesburg, South Africa region (africa-south1). Google
                applies its own security and data protection commitments to this
                storage, described in the{" "}
                <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Firebase privacy information
                </a>
                .
            </p>
            <p>
                No method of storage or transmission is completely secure, so I can’t
                guarantee absolute security. If a security breach affects your data in a
                way that puts you at risk, I will notify the Information Regulator and,
                where I am able to reach you, the people affected.
            </p>

            <h2>How long data is kept</h2>
            <p>Your data is kept until you delete it. There is no automatic expiry.</p>

            <h2>Deleting your data</h2>
            <p>
                <strong>One expense.</strong> Swipe the expense left in the list. It is
                removed from your phone and from the cloud, together with its receipt
                photo. You can tap Undo for a few seconds after swiping.
            </p>
            <p>
                <strong>Everything.</strong> Open Settings &gt; Delete all my data in
                the app. This permanently deletes all your expenses and receipt photos
                from your phone and from the cloud, and deletes your anonymous ID. This
                needs an internet connection, because the cloud data is removed first.
            </p>
            <p>
                <strong>If you uninstall the app first.</strong> Uninstalling removes
                the data on your phone, but it does not remove the cloud copy. A new
                installation receives a new anonymous ID and can’t reach the old data.
                Because the app holds no name or email, I may not be able to identify
                which data was yours. If you would like help with data you can no longer
                delete in the app, email{" "}
                <a href="mailto:odwamtatambi@gmail.com">odwamtatambi@gmail.com</a>. To
                avoid this, use Delete all my data before uninstalling.
            </p>

            <h2>Children</h2>
            <p>
                SlipStash is intended for people aged 18 and over. It is not directed at
                anyone under 18, and I don’t knowingly collect data from people under 18.
            </p>

            <h2>Your rights and complaints</h2>
            <p>
                You can ask me what data I hold, ask me to correct it, or ask me to
                delete it by emailing{" "}
                <a href="mailto:odwamtatambi@gmail.com">odwamtatambi@gmail.com</a>.
                Because the app has no name or email, I may only be able to help if
                you can tell me your anonymous ID. If you are not happy with how I
                handle your data, you can complain to South Africa’s Information
                Regulator at{" "}
                <a
                    href="https://inforegulator.org.za"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    inforegulator.org.za
                </a>
                .
            </p>

            <h2>Changes to this policy</h2>
            <p>
                If I change how the app handles data, I will update this page and the
                date at the top.
            </p>

            <h2>Contact</h2>
            <p>
                Questions or requests about your data:{" "}
                <a href="mailto:odwamtatambi@gmail.com">odwamtatambi@gmail.com</a>
            </p>
        </main>
    );
}