// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

import Head from "next/head";
import { useRouter } from "next/router";

import { Fragment } from "react/cjs/react.production.min";

// COMPONENTS/MEETUPS/NEWMETUPFORM
// const meetupData = {
//   title: enteredTitle,
//   image: enteredImage,
//   address: enteredAddress,
//   description: enteredDescription,
// };

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
