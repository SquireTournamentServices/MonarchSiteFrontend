import React from 'react'
import ImageLink from '../components/ImageLink.jsx'
import TextHeader from '../components/TextHeader.jsx'
import StaffProfile from '../components/StaffProfile.jsx'

import patreon_logo from '../img/Patreon_Logo.png'
import github_logo from '../img/Github_Logo.png'
import youtube_logo from '../img/Youtube_Logo.png'
import twitch_logo from '../img/Twitch_Logo.png'
import discord_logo from '../img/Discord_Logo.png'

import staff_nicholas from '../img/staff/nicholas.jpg'
import staff_libby from '../img/staff/libby.jpg'
import staff_tyler from '../img/staff/tyler.jpg'
import staff_mike from '../img/staff/mike.jpg'

import staff_martin from '../img/staff/martin.jpg'
import staff_eric from '../img/staff/eric.jpg'
import staff_darius from '../img/staff/darius.jpg'
import staff_bree from '../img/staff/bree.png'
import staff_ryan from '../img/staff/ryan.png'

import staff_marcus from '../img/staff/marcus.png'
import staff_david from '../img/staff/david.png'
import staff_andrew from '../img/staff/andrew.jpg'

import staff_sage from '../img/staff/sage.jpg'
import staff_jordan from '../img/staff/jordan.jpg'
import staff_pedro from '../img/staff/pedro.png'
import staff_rose from '../img/staff/rose.png'
import staff_curt from '../img/staff/curt.png'

import staff_os_danny from '../img/staff/open_source/danny.png'

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
      <div className="flex flex-row flex-wrap">
      	<ImageLink src={patreon_logo} href={patreon_url} text="Support on Patreon"/>
      	<ImageLink src={github_logo} href={github_url} text="Contribute on Github"/>
      	<ImageLink src={youtube_logo} href={youtube_url} text="Subscribe on Youtube"/>
      	<ImageLink src={twitch_logo} href={twitch_url} text="Watch on Twitch"/>
      	<ImageLink src={discord_logo} href={discord_url} text="Join our Discord"/>
      </div>

      <TextHeader text="Our Staff - Directors"/>
      <div className="w-full flex flex-wrap items-center justify-center">
        <StaffProfile image={staff_nicholas} name='Nicholas "Joking" Hammond' title="Executive Director" quote="Let's talk cEDH philosophy, it'll be fun, right?"/>
        <StaffProfile image={staff_libby} name='Landon "Libby" Liberator' title="Events Director/Judge Manager" quote="Well, layers are supposed to be intuitive..."/>
        <StaffProfile image={staff_tyler} name='Tyle "Tylord" Bloom' title="IT Director" quote="Interesting... The bit has becme sentient!"/>
        <StaffProfile image={staff_mike} name='Mike "a00682005" Hansen' title="Streaming Director" quote="Ha!"/>
      </div>
      
      <TextHeader text="Our Staff - Tournament Organisers"/>
      <div className="w-full flex flex-wrap items-center justify-center">
      	<StaffProfile image={staff_martin} name='Martin "Snuske" Hansen' title="Tournament Organiser" quote="You should try Kodama!"/>
      	<StaffProfile image={staff_eric} name='Eric "Efond" Palmer' title="Tournament Organiser" quote="First, read the card. Next, look up the oracle text..."/>
      	<StaffProfile image={staff_darius} name='Darius "Flash"' title="Tournament Organiser" quote="The cards so broken, man!"/>
      	<StaffProfile image={staff_bree} name='Bree "BreeBree" Yard' title="Tournament Organiser" quote=""/>
      	<StaffProfile image={staff_ryan} name='Ryan "Koibito"' title="Tournament Organiser" quote=""/>
      </div>

      <TextHeader text="Our Staff - Content Creation"/>
      <div className="w-full flex flex-wrap items-center justify-center">
      	<StaffProfile image={staff_marcus} name='Marcus "Argus Flightfin" Birch' title="Head of Content"/>
        <StaffProfile image={staff_david} name='David "Cptncomplicated" Henderson' title="Strean abd Website Technician" quote="Be the best versino of you that you can be"/>
        <StaffProfile image={staff_andrew} name='Andrew "gilkissin" Taft' title="Video Specialist" quote="Thery're a bugger threat than me. Destroy their stuff, not mine. I'm harmless."/>
      </div>

      <TextHeader text="Our Staff - Marketing"/>
      <div className="w-full flex flex-wrap items-center justify-center">
          <StaffProfile image={staff_sage} name='Sage "The Fabled Sage" Stafford' title="Marketing Lead" quote="Storm count is 8, I have 2 blue and 5 red mana in my pool."/>
          <StaffProfile image={staff_jordan} name='Jordan "Jo" Riddle' title="Graphic Designer" quote="Hiii"/>
          <StaffProfile image={staff_pedro} name='Pedro "SuchPedro"' title="Graphic Designer"/>
          <StaffProfile image={staff_rose} name='Rose "Flowwer" Ellis' title="Social Media Manager" quote="Mono-Green is TOTALLY  viable you guys!"/>
          <StaffProfile image={staff_curt} name='Curt "Octave"' title="Marketing and Events" quote="That's not busted, it's too slow."/>
      </div>

      <TextHeader text="Our Staff - Programmers and, Data Scientists"/>
      <div className="w-full flex flex-wrap items-center justify-center">
        <StaffProfile image={staff_os_danny} name="Danny Piper" title="Programmer" quote="Trice bot dev, website dev and admin, database admin and, Squire Desktop dev."/>
      </div>
    </div>
	);
}

export default AboutUs;
