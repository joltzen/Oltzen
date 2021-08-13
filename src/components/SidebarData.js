import {
  ArrowDropDown,
  ArrowDropUp,
  Bookmark,
  DriveEta,
  EmojiObjects,
  FlashOn,
  Highlight,
  Home,
  Info,
  Mic,
  PhotoCamera,
  RssFeed,
  SettingsInputHdmi,
  Straighten,
  YouTube,
} from "@material-ui/icons";
import React from "react";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
    cName: "nav-text",
  },
  {
    title: "HobbiCi",
    path: "/hobbyci",
    icon: <FlashOn />,
    iconClosed: <ArrowDropDown />,
    iconOpened: <ArrowDropUp />,

    subNav: [
      {
        title: "Tutorial",
        path: "/hobbyci/tutorial",
      },
      {
        title: "Zeichenbefehle",
        path: "/hobbyci/tutorial/zeichenbefehle",
      },
      {
        title: "Changelog",
        path: "/hobbyci/changelog",
      },
    ],
  },
  {
    title: "Singertrainer",
    path: "/singertrainer",
    icon: <Mic />,
  },
  {
    title: "LC-Meter",
    path: "/lcmeter",
    icon: <RssFeed />,
    iconClosed: <ArrowDropDown />,
    iconOpened: <ArrowDropUp />,

    subNav: [
      {
        title: "Schaltung",
        path: "/lcmeter/schaltung",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Pianotrainer",
    path: "/pianotrainer",
    icon: <Straighten />,
    iconClosed: <ArrowDropDown />,
    iconOpened: <ArrowDropUp />,

    subNav: [
      {
        title: "Controller",
        path: "/pianotrainer/controller",
        cName: "sub-nav",
      },
      {
        title: "Audio",
        path: "/pianotrainer/audio",
        cName: "sub-nav",
      },
      {
        title: "Ledleiste",
        path: "/pianotrainer/ledleiste",
      },
    ],
  },
  {
    title: "RomkI",
    path: "/romki",
    icon: <Bookmark />,
    iconClosed: <ArrowDropDown />,
    iconOpened: <ArrowDropUp />,

    subNav: [
      {
        title: "RomkIBilder",
        path: "/romki/bilder",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Nachttischlampe",
    path: "/nachttischlampe",
    icon: <Highlight />,
  },
  {
    title: "Car Akku Tester",
    path: "/carakkutester",
    icon: <DriveEta />,
  },
  {
    title: "W5500",
    path: "/w5500",
    icon: <SettingsInputHdmi />,

    iconClosed: <ArrowDropDown />,
    iconOpened: <ArrowDropUp />,

    subNav: [
      {
        title: "Schaltung",
        path: "/w5500/schaltung",
      },
    ],
  },
  {
    title: "Sonstiges",
    path: "/sonstiges",
    icon: <EmojiObjects />,

    iconClosed: <ArrowDropDown />,
    iconOpened: <ArrowDropUp />,

    subNav: [
      {
        title: "Mintyboost",
        path: "/sonstiges/mintyboost",
      },
    ],
  },
  {
    title: "Bilder",
    path: "/bilder",
    icon: <PhotoCamera />,
  },
  {
    title: "Youtube",
    icon: <YouTube />,
  },
  {
    title: "Impressum",
    path: "/impressum",
    icon: <Info />,
  },
];
