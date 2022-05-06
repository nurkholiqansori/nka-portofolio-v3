import {
  Text,
  Heading,
  Box,
  Stack,
  Button,
  Icon,
  Badge,
  Center,
  useColorMode,
  Skeleton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import DarkModeSwitch from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import React from 'react'
import { data } from '../api/data'
import { siGithub } from 'simple-icons/icons'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Navigation from '../components/Navigation'
import { StateGlobalContext } from '../context/StateGlobalContext'
import { NextPage } from 'next'

const iconBuild = [
  {
    wordpress: {
      name: 'wordpress',
      path: 'M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0',
      color: '#21759B',
    },
    nextjs: {
      name: 'nextjs',
      path: 'M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z',
      color: '#000000',
    },
    tailwindcss: {
      name: 'tailwindcss',
      path: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
      color: '#06B6D4',
    },
    styledcomponents: {
      name: 'styledcomponents',
      path: 'M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z',
      color: '#DB7093',
    },
    materialui: {
      name: 'materialui',
      path: 'M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z',
      color: '#007FFF',
    },
    html5: {
      name: 'html5',
      path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
      color: '#E34F26',
    },
    css3: {
      name: 'css3',
      path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z',
      color: '#1572B6',
    },
    javascript: {
      name: 'javascript',
      path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
      color: '#F7DF1E',
    },
    mongodb: {
      name: 'mongodb',
      path: 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z',
      color: '#47A248',
    },
    reactrouterdom: {
      name: 'reactrouterdom',
      path: 'M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z',
      color: '#CA4245',
    },
    express: {
      name: 'expressjs',
      path: 'M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z',
      color: '#000000',
    },
    typescript: {
      name: 'typescript',
      path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
      color: '#3178C6',
    },
    nodejs: {
      name: 'nodejs',
      path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z',
      color: '#339933',
    },
    reactjs: {
      name: 'reactjs',
      path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z',
      color: '#61DAFB',
    },
    chakraui: {
      name: 'chakraui',
      path: 'M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z',
      color: '#319795',
    },
  },
]
const iconProvider = [
  {
    name: 'Sololearn',
    path: 'M18.621 16.084a8.483 8.483 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9.039 9.039 0 0 0 1.587-.3 8.32 8.32 0 0 0 5.787-5.887 8.555 8.555 0 0 0-8.258-10.832 9.012 9.012 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542 2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.538 8.538 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a8.943 8.943 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766 5.727 1.492 10.87-2.773 10.87-8.229 0-.35-.02-.7-.06-1.04-.1-.792-1.165-.992-1.547-.29a8.597 8.597 0 0 1-7.574 4.514zM5.382 7.916a8.483 8.483 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a9.93 9.93 0 0 0-1.598.29A8.339 8.339 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.538 8.538 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a8.945 8.945 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357 12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z',
    color: '#149EF2',
  },
  {
    name: 'Udemy',
    path: 'M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055-1.428 0-2.947-.991-2.947-3.027v-7.878z',
    color: '#A435F0',
  },
  {
    name: 'ProgrammingHub',
    path: '',
    color: '',
  },
  {
    name: 'HackerRank',
    path: 'M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z',
    color: '#00EA64',
  },
  {
    name: 'Progate',
    path: 'M10.056 24a17.14 17.14 0 01-3.457-.698c-1.244-.364-2.899-1-2.913-2.319 0-.946.54-1.755 1.675-2.477a15.827 15.827 0 011.6-.844 39.6 39.6 0 012.2-.928V4.98l-4.41-.476v12.652a.848.848 0 01-.895.846.85.85 0 01-.904-.846V3.496a.906.906 0 01.904-.903.8.8 0 01.096.014l6.198.67a.902.902 0 01.8.9v11.826a61.194 61.194 0 002.399-1.03c2.27-1.036 3.799-2.091 4.668-3.237 1.056-1.374 1.218-3.075 1.168-4.259a6.264 6.264 0 00-1.254-3.515 5.498 5.498 0 00-2.095-1.725 6.208 6.208 0 00-1.663-.486c-.6-.082-.896-.51-.864-.938.032-.427.384-.75.888-.8.863-.071 1.503.147 2.375.536a7.76 7.76 0 012.86 2.32 8.167 8.167 0 011.6 4.522 8.967 8.967 0 01-.485 3.481 7.36 7.36 0 01-1.088 1.966c-1.584 2.065-4.39 3.34-5.31 3.764-.868.4-2.8 1.2-3.18 1.352V23.1a.908.908 0 01-.31.682.918.918 0 01-.567.218zm-.896-5.318c-.552.2-1.4.512-1.72.66-.32.147-1.215.565-1.61.91-.1.085-.417.385-.339.629.078.244.446.374 1.904.766.518.14 1.125.274 1.765.4z',
    color: '#380953',
  },
]

const Index: NextPage = () => {
  const { loading, setLoading } = React.useContext(StateGlobalContext)
  const [dataRepo, setDataRepo] = React.useState<
    [
      {
        name: string
        description: string
        topics: [string]
        homepage: string
        html_url: string
        language: string
      },
    ]
  >([
    {
      name: '',
      description: '',
      topics: [''],
      homepage: '',
      html_url: '',
      language: '',
    },
  ])
  const [dataProfile, setDataProfile] = React.useState<{
    [key: string]: string
    avatar_url: string
    name: string
    location: string
  }>({
    avatar_url: '',
    name: '',
    location: '',
  })
  const [dataReadme, setDataReadme] = React.useState<{
    [key: string]: string
    content: string
  }>({
    content: '',
  })

  React.useEffect(() => {
    fetch('https://api.github.com/users/nurkholiqansori/repos')
      .then((response) => response.json())
      .then((result) => setDataRepo(result))
      .catch((error) => console.log('error', error))
    fetch('https://api.github.com/users/nurkholiqansori')
      .then((response) => response.json())
      .then((result) => setDataProfile(result))
      .catch((error) => console.log('error', error))
    fetch('https://api.github.com/repos/nurkholiqansori/nurkholiqansori/readme')
      .then((response) => response.json())
      .then((result) => setDataReadme(result))
      .catch((error) => console.log('error', error))
  }, [])

  // BODY REF
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const portofolioRef = React.useRef<HTMLDivElement>(null)
  const personalProjectsRef = React.useRef<HTMLDivElement>(null)
  const repositoriesRef = React.useRef<HTMLDivElement>(null)
  const cerfiticateRef = React.useRef<HTMLDivElement>(null)
  const footerRef = React.useRef<HTMLDivElement>(null)
  const headerRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const navRef = React.useRef<HTMLDivElement>(null)
  const bodyRef = React.useRef<HTMLDivElement>(null)
  const footerWrapperRef = React.useRef<HTMLDivElement>(null)

  // LOADING REF
  const loadingRef = React.useRef<HTMLDivElement>(null)
  const titleLoadingRef = React.useRef<HTMLDivElement>(null)
  const closingLoadingRef = React.useRef<HTMLDivElement>(null)

  // ACTIVE STATE
  const [navActive, setNavActive] = React.useState<boolean>(false)
  const [aboutActive, setAboutActive] = React.useState<boolean>(false)
  const [portofolioActive, setPortofolioActive] = React.useState<boolean>(false)
  const [personalProjectsActive, setPersonalProjectsActive] =
    React.useState<boolean>(false)
  const [repositoriesActive, setRepositoriesActive] =
    React.useState<boolean>(false)
  const [cerfiticateActive, setCerfiticateActive] =
    React.useState<boolean>(false)
  const [footerActive, setFooterActive] = React.useState<boolean>(false)

  const { colorMode } = useColorMode()
  const bgColor = { light: 'blackAlpha', dark: 'whiteAlpha' }

  React.useEffect(() => {
    document.body.classList.add('hidden')
    if (window !== undefined) {
      const width = window.innerWidth < 768 ? '500%' : '200%'
      const tl = gsap.timeline({ onComplete: () => setLoading(false) })

      if (loading) {
        tl.to([titleLoadingRef.current], {
          delay: 1,
          duration: 0.5,
          opacity: 1,
          stagger: 0.2,
          ease: 'power3.inOut',
        })
          .to([closingLoadingRef.current], {
            delay: 3,
            duration: 0.5,
            translateY: -10,
          })
          .to([closingLoadingRef.current], {
            duration: 0.5,
            translateY: -10,
            skewX: '-60deg',
          })
          .to([closingLoadingRef.current], {
            duration: 0.5,
            width: width,
          })
          .to(
            [
              closingLoadingRef.current,
              loadingRef.current,
              titleLoadingRef.current,
            ],
            {
              display: 'none',
            },
          )
      }
    }
  }, [])

  React.useEffect(() => {
    if (window !== undefined && !loading && containerRef !== undefined) {
      document.body.classList.remove('hidden')
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline()
      tl.to([containerRef.current], {
        opacity: 1,
      })
        .call(() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }))
        .call(
          () =>
            headerRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
            }),
          null,
          '3',
        )

      // NAV TOP
      ScrollTrigger.create({
        trigger: navRef?.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => setNavActive(true),
        onLeave: () => setNavActive(false),
        onEnterBack: () => setNavActive(true),
        onLeaveBack: () => setNavActive(false),
      })

      // ABOUT
      ScrollTrigger.create({
        trigger: aboutRef?.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => setAboutActive(true),
        onLeave: () => setAboutActive(false),
        onEnterBack: () => setAboutActive(true),
        onLeaveBack: () => setAboutActive(false),
      })

      // PORTOFOLIO
      ScrollTrigger.create({
        trigger: portofolioRef?.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => setPortofolioActive(true),
        onLeave: () => setPortofolioActive(false),
        onEnterBack: () => setPortofolioActive(true),
        onLeaveBack: () => setPortofolioActive(false),
      })

      // PERSONAL PROJECTS
      ScrollTrigger.create({
        trigger: personalProjectsRef?.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => setPersonalProjectsActive(true),
        onLeave: () => setPersonalProjectsActive(false),
        onEnterBack: () => setPersonalProjectsActive(true),
        onLeaveBack: () => setPersonalProjectsActive(false),
      })

      // REPOSITORIES
      ScrollTrigger.create({
        trigger: repositoriesRef?.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => setRepositoriesActive(true),
        onLeave: () => setRepositoriesActive(false),
        onEnterBack: () => setRepositoriesActive(true),
        onLeaveBack: () => setRepositoriesActive(false),
      })

      // CERFITICATE
      ScrollTrigger.create({
        trigger: cerfiticateRef?.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => setCerfiticateActive(true),
        onLeave: () => setCerfiticateActive(false),
        onEnterBack: () => setCerfiticateActive(true),
        onLeaveBack: () => setCerfiticateActive(false),
      })
    }
  }, [loading])

  return (
    <>
      <Container>
        <Stack
          ref={loadingRef}
          overflow='hidden'
          width='full'
          height='100vh'
          maxW='100vw'
          zIndex={999}
          position='fixed'
          top='0'
          bottom='0'
          backgroundColor='gray.900'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Heading
            as='div'
            size='xl'
            opacity={0}
            fontWeight='900'
            color='white'
            textAlign='center'
            ref={titleLoadingRef}
          >
            Portofolio of{' '}
            <Heading
              size='xl'
              fontWeight='900'
              textAlign='center'
              color='blue.500'
            >
              Nur Kholiq Ansori
            </Heading>
          </Heading>
          <Stack
            width='10px'
            transform='translateX(-50%) translateY(-110%)'
            height='full'
            position='absolute'
            top='0'
            left='50%'
            background='#fff'
            ref={closingLoadingRef}
          />
        </Stack>
      </Container>
      <div
        ref={containerRef}
        style={{ opacity: 0, translate: 'transformY(50px)' }}
      >
        <Container>
          <div id='header' ref={headerRef}></div>
          <Box
            ref={navRef}
            as='nav'
            w='100vw'
            h='100vh'
            display='grid'
            py='20'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            {/* <Button
              rounded={'none'}
              sx={{
                borderImage:
                  "url('https://img.lovepik.com/free_png/32/37/33/97N58PICpVxKfbdd07Z2N_PIC2018.png_860.png') 27 space",
              }}
              size={'lg'}
              fontWeight={'medium'}
              px={6}
              color={'white'}
              colorScheme={bgColor[colorMode]}
              bg={'gray.400'}
              clipPath='polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)'
            >
              About
            </Button> */}
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'medium'}
              px={6}
              color={'white'}
              colorScheme={bgColor[colorMode]}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() =>
                bodyRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              About
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'medium'}
              px={6}
              color={'white'}
              colorScheme={bgColor[colorMode]}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() =>
                portofolioRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Portofolio
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'medium'}
              px={6}
              color={'white'}
              colorScheme={bgColor[colorMode]}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() =>
                personalProjectsRef.current?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              Personal Project
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'medium'}
              px={6}
              color={'white'}
              colorScheme={bgColor[colorMode]}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() =>
                repositoriesRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Repositories
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'medium'}
              px={6}
              color={'white'}
              colorScheme={bgColor[colorMode]}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() =>
                cerfiticateRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Certificate
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'medium'}
              px={6}
              color={'white'}
              colorScheme={bgColor[colorMode]}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() =>
                footerRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end',
                })
              }
            >
              Footer
            </Button>
          </Box>
          <div ref={bodyRef}>
            <Hero apiProfile={dataProfile} apiReadme={dataReadme} />
            <Main>
              <div id='portofolio' ref={portofolioRef}>
                <Heading as='h2' mb='10' textAlign='center'>
                  Portofolio
                </Heading>
                <Stack gap={2}>
                  {data.experience.map((i) => (
                    <Center py={5} key={i.com}>
                      <Box
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                      >
                        <Box
                          h={'210px'}
                          bg={'gray.100'}
                          mt={-6}
                          mx={-6}
                          mb={6}
                          pos={'relative'}
                          overflow={'hidden'}
                          roundedTop={'md'}
                        >
                          <Image src={i.img} alt={i.title + ' at ' + i.com} />
                        </Box>
                        <Stack>
                          <Text
                            color={'blue.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}
                          >
                            {i.status}
                          </Text>
                          <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}
                          >
                            {i.com}
                          </Heading>
                          <Text as='p'>Develop at {i.date}</Text>
                          <Text as='p'>
                            Build with{' '}
                            <Icon
                              fill={iconBuild[0][i.build]?.color}
                              viewBox='0 0 24 24'
                              fontSize='20'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                stroke='none'
                                d={iconBuild[0][i.build].path}
                              />
                            </Icon>
                          </Text>
                        </Stack>
                        <Stack
                          mt={6}
                          direction={'row'}
                          spacing={4}
                          align={'center'}
                        >
                          <Link href={i.address}>
                            <a target='_blank' rel='noreferrer nofollow'>
                              <Button
                                rounded={'full'}
                                size='md'
                                fontWeight={'medium'}
                                px={6}
                                color={'white'}
                                colorScheme={bgColor[colorMode]}
                                bg={'blue.400'}
                                _hover={{ bg: 'blue.500' }}
                              >
                                Visit
                              </Button>
                            </a>
                          </Link>
                        </Stack>
                      </Box>
                    </Center>
                  ))}
                </Stack>
              </div>
              <Stack gap={5}>
                <div id='personal-project' ref={personalProjectsRef}>
                  <Heading as='h2' my='10' textAlign='center'>
                    Personal Project
                  </Heading>
                  <Stack gap={2}>
                    {data.personalProjects.map((i) => (
                      <Center py={5} key={i.title}>
                        <Box
                          w={'full'}
                          bg={useColorModeValue('white', 'gray.900')}
                          boxShadow={'2xl'}
                          rounded={'md'}
                          p={6}
                          overflow={'hidden'}
                        >
                          <Box
                            h={'210px'}
                            bg={'gray.100'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}
                            overflow={'hidden'}
                            roundedTop={'md'}
                          >
                            <Image src={i.img} alt={i.title} />
                          </Box>
                          <Stack>
                            <Text
                              color={'blue.500'}
                              textTransform={'uppercase'}
                              fontWeight={800}
                              fontSize={'sm'}
                              letterSpacing={1.1}
                            >
                              {/* {i.status} */}
                            </Text>
                            <Heading
                              color={useColorModeValue('gray.700', 'white')}
                              fontSize={'2xl'}
                              fontFamily={'body'}
                            >
                              {i.title}
                            </Heading>
                            <Text as='p'>Develop on {i.date}</Text>
                            <Text as='div'>
                              Build with:{' '}
                              <Stack direction='row' mt='5'>
                                {i.build.map((is, index) => {
                                  return (
                                    <Icon
                                      fill={iconBuild[0][is.name]?.color}
                                      viewBox='0 0 24 24'
                                      fontSize='20'
                                      stroke='currentColor'
                                      key={index}
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        stroke='none'
                                        d={iconBuild[0][is.name]?.path}
                                      />
                                    </Icon>
                                  )
                                })}
                              </Stack>
                            </Text>
                          </Stack>
                          <Stack
                            mt={6}
                            direction={'row'}
                            gap={4}
                            flexWrap={'wrap'}
                            align={'center'}
                          >
                            {i.address ? (
                              <Link href={i.address}>
                                <a target='_blank'>
                                  <Button
                                    rounded={'full'}
                                    size='md'
                                    fontWeight={'medium'}
                                    px={6}
                                    color={'white'}
                                    colorScheme={bgColor[colorMode]}
                                    bg={'blue.400'}
                                    _hover={{ bg: 'blue.500' }}
                                  >
                                    Visit
                                  </Button>
                                </a>
                              </Link>
                            ) : (
                              <Button
                                rounded={'full'}
                                size='md'
                                fontWeight={'medium'}
                                px={6}
                                color={'white'}
                                colorScheme={bgColor[colorMode]}
                                bg={'blue.400'}
                                _hover={{ bg: 'blue.500' }}
                              >
                                Coming Soon
                              </Button>
                            )}
                            <Link href={i.repo}>
                              <a target='_blank' rel='noopener noreferrer'>
                                <Button
                                  rounded={'full'}
                                  size='md'
                                  fontWeight={'medium'}
                                  px={6}
                                  color={'white'}
                                  colorScheme={bgColor[colorMode]}
                                  bg={'blue.400'}
                                  _hover={{ bg: 'blue.500' }}
                                  leftIcon={
                                    <Icon
                                      fill='currentColor'
                                      viewBox='0 0 24 24'
                                      fontSize='20'
                                      stroke='currentColor'
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        stroke='none'
                                        d={siGithub.path}
                                      />
                                    </Icon>
                                  }
                                >
                                  Repositories
                                </Button>
                              </a>
                            </Link>
                          </Stack>
                        </Box>
                      </Center>
                    ))}
                  </Stack>
                </div>
              </Stack>
              <Stack gap={5}>
                <div id='repositories' ref={repositoriesRef}>
                  <Heading as='h2' my='10' textAlign='center'>
                    Repositories
                  </Heading>
                  <Stack gap={2}>
                    {dataRepo[0].name ? (
                      dataRepo.map((i) => (
                        <Center py={5} key={i.name}>
                          <Box
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={6}
                            overflow={'hidden'}
                          >
                            <Stack>
                              <Text
                                color={'blue.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'sm'}
                                letterSpacing={1.1}
                              >
                                {i.language}
                              </Text>
                              <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                fontFamily={'body'}
                              >
                                {i.name}
                              </Heading>
                              <Stack
                                direction='row'
                                my='3'
                                flexWrap='wrap'
                                gap={2}
                              >
                                {i.topics.map((is: string) => (
                                  <Badge colorScheme='purple' key={is}>
                                    {is}
                                  </Badge>
                                ))}
                              </Stack>
                              <Text as='p'>{i.description}</Text>
                            </Stack>
                            <Stack
                              mt={6}
                              direction={'row'}
                              gap={4}
                              flexWrap={'wrap'}
                              align={'center'}
                            >
                              {i.homepage && (
                                <Link href={i.homepage}>
                                  <a target='_blank' rel='noopener noreferrer'>
                                    <Button
                                      rounded={'full'}
                                      size='md'
                                      fontWeight={'medium'}
                                      px={6}
                                      color={'white'}
                                      colorScheme={bgColor[colorMode]}
                                      bg={'blue.400'}
                                      _hover={{ bg: 'blue.500' }}
                                    >
                                      Homepage
                                    </Button>
                                  </a>
                                </Link>
                              )}
                              <Link href={i.html_url}>
                                <a target='_blank' rel='noopener noreferrer'>
                                  <Button
                                    rounded={'full'}
                                    size='md'
                                    fontWeight={'medium'}
                                    px={6}
                                    color={'white'}
                                    colorScheme={bgColor[colorMode]}
                                    bg={'blue.400'}
                                    _hover={{ bg: 'blue.500' }}
                                    leftIcon={
                                      <Icon
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                        fontSize='20'
                                        stroke='currentColor'
                                      >
                                        <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          stroke='none'
                                          d={siGithub.path}
                                        />
                                      </Icon>
                                    }
                                  >
                                    Repositories
                                  </Button>
                                </a>
                              </Link>
                            </Stack>
                          </Box>
                        </Center>
                      ))
                    ) : (
                      <>
                        <Skeleton width='200' height='100' />
                        <Skeleton width='200' height='100' />
                        <Skeleton width='200' height='100' />
                      </>
                    )}
                  </Stack>
                </div>
              </Stack>
              <Stack gap={5}>
                <div id='certificate' ref={cerfiticateRef}>
                  <Heading as='h2' my='24' textAlign='center'>
                    Certificate
                  </Heading>
                  <Stack gap={2}>
                    {data.skill
                      .slice()
                      .reverse()
                      .map((i: any) => (
                        <Center py={5} key={i.id}>
                          <Box
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={6}
                            overflow={'hidden'}
                          >
                            <Stack>
                              <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                fontFamily={'body'}
                              >
                                {i.title}
                              </Heading>
                              <Stack direction='row' my='3' alignItems='center'>
                                {iconProvider
                                  .filter((it) => i.company === it.name)
                                  .map((it) => (
                                    <Icon
                                      fill={it.color}
                                      viewBox='0 0 24 24'
                                      fontSize='20'
                                      key={it.name}
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        stroke='none'
                                        d={it.path}
                                      />
                                    </Icon>
                                  ))}{' '}
                                <Text fontSize='lg'>{i.company}</Text>
                              </Stack>
                              <Text as='p'>Published at {i.date}</Text>
                            </Stack>
                            <Stack
                              mt={6}
                              direction={'row'}
                              spacing={4}
                              align={'center'}
                            >
                              <Link href={i.credential}>
                                <a target='_blank' rel='noreferrer noopener'>
                                  <Button
                                    rounded={'full'}
                                    size='md'
                                    fontWeight={'medium'}
                                    px={6}
                                    color={'white'}
                                    colorScheme={bgColor[colorMode]}
                                    bg={'blue.400'}
                                    _hover={{ bg: 'blue.500' }}
                                  >
                                    See Credential
                                  </Button>
                                </a>
                              </Link>
                            </Stack>
                          </Box>
                        </Center>
                      ))}
                  </Stack>
                </div>
              </Stack>
            </Main>
          </div>
          <DarkModeSwitch />
          <Navigation />
          <div ref={footerWrapperRef}>
            <Footer>
              <Center flexDirection='column'>
                <Text>Build with ❤️ by Nur Kholiq Ansori</Text>
                <Box my='5'>
                  <Image
                    src='/1618983297-powered-by-vercel.svg'
                    width='120'
                    height='25'
                  />
                </Box>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'medium'}
                  px={6}
                  color={'white'}
                  colorScheme={bgColor[colorMode]}
                  bg={'blue.400'}
                  _hover={{ bg: 'blue.500' }}
                  onClick={() =>
                    headerRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                    })
                  }
                >
                  Go to Top
                </Button>
              </Center>
            </Footer>
          </div>
          <div id='footer' ref={footerRef}></div>
        </Container>
      </div>
    </>
  )
}

export default Index
