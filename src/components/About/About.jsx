import React from "react";
import s from "./About.module.css";
const About = () => {
  return (
    <div className={s.about}>
      <div className={s.aboutText}>
        <h1>General information</h1>
        <p>
          I used free version of api so you can use only only 20 post/put/delete
          requests per hour.
        </p>
        <p>Click on the help button on the top left to see this page.</p>
        <p>
          At the top right, you can log out of your account or log in if you are
          not yet authorized.
        </p>
        <p>
          The right part of the page is a navigation menu at the top of which
          there are links to the relevant sections, and at the bottom there is a
          list of the last registered users.
        </p>
        <h1>Information about pages</h1>

        <h2>Login</h2>
        <p>
          If you have recently logged in on this site or registered using the
          link, then thanks to cookies, the system will remember you for some
          time.
        </p>
        <p>
          After a certain number of password entries, the system will require
          you to enter a captcha.
        </p>

        <h2>Profile</h2>

        <p>You can change your photo. Just click on button under avatar =)</p>
        <p>
          Click on "Edit profile" to open form to change your contacts, name,
          some info about you, your status about job and aditional message about
          it.
        </p>

        <p>
          A little to the right there is your status which is visible to
          everyone in the list of users, click on it 2 times (if you opened the
          site on a computer or laptop) or hold it (if on a touch device) to
          change it.
        </p>

        <p>
          At the bottom of the page there is an option to add a post, but the
          api I used did not allow working with them, so they are only saved in
          BLL.
        </p>

        <h2>Messages</h2>

        <p>
          The api also does not allow working with dialogs and messages, so I
          created three dialogs in BLL and wrote the logic to work with them.
        </p>

        <p>
          You can switch between dialogues and write messages to each of the
          people, also you cannot send an empty message.
        </p>

        <h2>Users</h2>

        <p>
          You can switch between pages, the buttons at the top of the section
          will allow you to go to: first, last, next and last page,
          respectively.
        </p>

        <p>
          When you click on the subscribe / unsubscribe button, you will save
          this information to the server, you can also click on the user's
          avatar to go to the person's profile, on the first pages there are
          people who did not have time to update information about themselves
          because they just registered. And the larger the page number, the more
          people there who filled out their profile)
        </p>
      </div>
    </div>
  );
};

export default About;
