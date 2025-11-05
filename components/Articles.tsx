"use client";

import React from "react";
import { GiCheckMark } from "react-icons/gi";
import laser1 from "@/assets/laser1.jpg";
import Image from "next/image";
import { motion } from "motion/react";
import {
  articleContainer,
  articleListVariants,
  articleSubtitleVariants,
  articleTitleVariants,
  cardContainer,
} from "@/lib/animation";

const MotionImage = motion.create(Image);

const Articles = () => {
  return (
    <section className="flex flex-col gap-30 lg:gap-46 xl:gap-52 px-6 sm:px-10 lg:px-18  2xl:px-28 sm:pb-24 xl:pb-30 pt-46 pb-16 bg-gray-400/30">
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-16 justify-between">
        <div className="w-full lg:max-w-[48%] grow">
          <motion.div
            className="max-w-full flex flex-row"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
          >
            <MotionImage
              src={laser1}
              alt="Lasersko čišćenje"
              className="rounded-4xl xl:-mt-10 w-full sm:pr-3 lg:pr-0  sm:w-1/2 lg:w-full xl:w-1/2 h-auto xl:pr-3"
              width={450}
              height={680}
              variants={{
                hidden: {
                  scaleX: 0,
                  scaleY: 0,
                  opacity: 0,
                  transformOrigin: "top left",
                },
                visible: {
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                  transition: { duration: 0.5 },
                },
              }}
              // style={{ transformOrigin: "top left" }}
            />
            <MotionImage
              src={laser1}
              alt="Lasersko čišćenje"
              className="rounded-4xl xl:-mb-10 w-1/2 h-auto xl:block lg:hidden sm:block hidden pl-3"
              width={450}
              height={680}
              variants={{
                hidden: {
                  scaleX: 0,
                  scaleY: 0,
                  opacity: 0,
                  transformOrigin: "top left",
                },
                visible: {
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.25 },
                },
              }}
            />
          </motion.div>
        </div>
        <motion.div
          className="xl:mt-10 w-full lg:max-w-[48%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={articleContainer}
        >
          <motion.h3
            className="text-4xl font-mont font-bold mb-12"
            variants={articleTitleVariants}
          >
            Fokus na tehnologiju i sigurnost
          </motion.h3>
          <motion.p
            className="text-2xl text-inter mb-12"
            variants={articleTitleVariants}
          >
            Lasersko čišćenje koristi visoko kontroliranu snagu svjetlosti kako
            bi uklonilo slojeve nečistoća bez kontakta s površinom.
          </motion.p>
          <div className="">
            <motion.p
              className="mb-12 text-3xl font-semibold text-mont"
              variants={articleSubtitleVariants}
            >
              Što ga čini sigurnijim od ostalih vrsta čišćenja?
            </motion.p>
            <ul className="list-none flex flex-col gap-8">
              <motion.li
                className="flex flex-row gap-3 text-2xl text-inter"
                variants={articleListVariants}
              >
                <GiCheckMark className="text-green-600" />
                <span>Nema abrazivnog kontakta ni mehaničkog pritiska</span>
              </motion.li>
              <motion.li
                className="flex flex-row gap-3 text-2xl text-inter"
                variants={articleListVariants}
              >
                <GiCheckMark className="text-green-600" />
                <span>
                  Ugrađeni sigurnosni sustavi i precizna kontrola snopa
                </span>
              </motion.li>
              <motion.li
                className="flex flex-row gap-3 text-2xl text-inter"
                variants={articleListVariants}
              >
                <GiCheckMark className="text-green-600" />
                <span>Smanjen rizik oštećenja osjetljivih površina</span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-16 justify-between ">
        <motion.div
          className="xl:mt-10 w-full lg:max-w-[48%] order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={articleContainer}
        >
          <motion.h3
            className="text-4xl font-mont font-bold mb-12"
            variants={articleTitleVariants}
          >
            Fleksibilnost primjene
          </motion.h3>
          <motion.p
            className="text-2xl text-inter mb-12"
            variants={articleTitleVariants}
          >
            Zahvaljujući svojoj preciznosti i mogućnosti prilagodbe, lasersko
            čišćenje koristi se u širokom spektru industrijskih i
            restauratorskih projekata — od pripreme površina do detaljnog
            čišćenja povijesnih artefakata.
          </motion.p>
          <div className="">
            <motion.p
              className="mb-12 text-3xl font-semibold text-mont"
              variants={articleSubtitleVariants}
            >
              Gdje se sve koristi lasersko čišćenje?
            </motion.p>
            <ul className="list-none flex flex-col gap-8">
              <motion.li
                className="flex flex-row gap-3 text-2xl text-inter"
                variants={articleListVariants}
              >
                <GiCheckMark className="text-green-600" />
                <span>
                  Primjena u auto, brodogradnji, zrakoplovstvu i industriji
                  alata
                </span>
              </motion.li>
              <motion.li
                className="flex flex-row gap-3 text-2xl text-inter"
                variants={articleListVariants}
              >
                <GiCheckMark className="text-green-600" />
                <span>
                  Pogodno za restauraciju umjetnina i kamenih površina
                </span>
              </motion.li>
              <motion.li
                className="flex flex-row gap-3 text-2xl text-inter"
                variants={articleListVariants}
              >
                <GiCheckMark className="text-green-600" />
                <span>
                  Učinkovito na metalu, betonu, kamenu i drugim materijalima
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
        <div className="w-full lg:max-w-[48%] grow lg:order-2 order-1">
          <motion.div
            className="max-w-full flex flex-row"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
          >
            <MotionImage
              src={laser1}
              alt="Lasersko čišćenje"
              className="rounded-4xl xl:-mb-10 w-full sm:pr-3 lg:pr-0  sm:w-1/2 lg:w-full xl:w-1/2 h-auto xl:pr-3"
              width={450}
              height={680}
              variants={{
                hidden: {
                  scaleX: 0,
                  scaleY: 0,
                  opacity: 0,
                  transformOrigin: "top right",
                },
                visible: {
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.25 },
                },
              }}
            />
            <MotionImage
              src={laser1}
              alt="Lasersko čišćenje"
              className="rounded-4xl xl:-mt-10 w-1/2 h-auto xl:block lg:hidden sm:block hidden pl-3"
              width={450}
              height={680}
              variants={{
                hidden: {
                  scaleX: 0,
                  scaleY: 0,
                  opacity: 0,
                  transformOrigin: "top right",
                },
                visible: {
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                  transition: { duration: 0.5 },
                },
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
