import React from 'react'
import ImageLink from '../components/ImageLink.jsx'
import TextHeader from '../components/TextHeader.jsx'
import StaffProfile from '../components/StaffProfile.jsx'

import patreon_logo from '../img/Patreon_Logo.png'
import github_logo from '../img/Github_Logo.png'
import youtube_logo from '../img/Youtube_Logo.png'
import twitch_logo from '../img/Twitch_Logo.png'
import discord_logo from '../img/Discord_Logo.png'

const AboutUs = () => {
	// I put the links here so that they do not get lost
  const patreon_url = "https://www.patreon.com/monarchevents";
  const github_url = "https://github.com/MonarchDevelopment";
  const youtube_url = "https://www.youtube.com/channel/UCE5ysuTXyfl0tu1303tZJGQ";
  const twitch_url = "https://www.twitch.tv/monarchmedia";
	const discord_url = "https://discord.com/invite/6EQq2Py";

	return (
		<div className="w-full flex flex-col items-start space-y-4">
      <TextHeader text="Welcome to Monarch!"/>
      <p>
Our mission is to redefine Magic events with community, passion, and integrity.
Monarch is a registered non-profit corporation, based in Vancouver, British Columbia.
      </p>

      <p>
Our Patreon is focused on our dedicated supporters who love playing in cEDH tournaments. The best reward we can offer is our events each year. Our Patreons allow us to offer larger prize pools and invest in necessary tournament infrastructure to continue growing operations.
      </p>

      <p>
In short: if you want to see more of us and more of our events, consider supporting!
      </p>
      <TextHeader text="Monarch Tournaments"/>
      <p>
We run two "Crown" events every year, Marchesa and Oktoberfest. These events seek to be the gold standard for cEDH tournaments. Your support goes a long way in creating the cEDH community we all want to see.
      </p>

      <TextHeader text="Monarch Values"/>
      <p>
Running tournaments for charity is a great way for us to give back. All our Crown events partner with charities to help raise money for the greater Magic community. We believe Magic is a game for everyone. We work towards that goal with every event we run.
      </p>

      <TextHeader text="Support Us"/>
      <div className="flex flex-row flex-wrap space-x-4">
      	<ImageLink src={patreon_logo} href={patreon_url} text="Support on Patreon"/>
      	<ImageLink src={github_logo} href={github_url} text="Contribute on Github"/>
      	<ImageLink src={youtube_logo} href={youtube_url} text="Subscribe on Youtube"/>
      	<ImageLink src={twitch_logo} href={twitch_url} text="Watch on Twitch"/>
      	<ImageLink src={discord_logo} href={discord_url} text="Join our Discord"/>
      </div>

      <TextHeader text="Our Staff"/>
      <div className="w-full flex flex-wrap items-center justify-center">
        <StaffProfile image="changeme" name="name" title="title" quote="quote"/>
        <StaffProfile image="changeme" name="name" title="title" quote="quote"/>
        <StaffProfile image="changeme" name="name" title="title" quote="quote"/>
        <StaffProfile image="changeme" name="name" title="title" quote="quote"/>
        <StaffProfile image="changeme" name="name" title="title" quote="quote"/>
        <StaffProfile image="changeme" name="name" title="title" quote="quote"/>
        <StaffProfile image="changeme" name="name" title="title" quote="quote"/>
      </div>
    </div>
	);
}

export default AboutUs;
