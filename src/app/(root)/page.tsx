import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import {
  AVATAR_URL,
  BLOG_INTRODUCE,
  FLINE_INTRODUCE,
  GITHUB_URL,
  JUEJIN_URL,
  NICKNAME,
  TLINE_INTRODUCE,
} from '@/constants';
import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="grid grid-cols-1 pt-[56px] px-4 bg-slate-50 dark:bg-slate-950">
      <section className="min-h-[calc(100dvh-56px)]  p-12 max-md:p-2 flex flex-row items-center max-md:flex-col-reverse  max-md:items-center gap-7 max-md:gap-2 ">
        <div className="flex flex-col max-md:flex-1">
          <div className="flex flex-col max-md:items-center pb-14 max-md:pb-6">
            <h2 className="text-slate-800  leading-[46px]  text-3xl max-md:text-2xl font-bold dark:text-white">
              {FLINE_INTRODUCE}
            </h2>
            <h2 className="text-slate-800  dark:text-white leading-[46px] text-3xl max-md:text-2xl font-bold indent-[2em] max-md:indent-0 ">
              我是
              <Link href={'/'} className="underline decoration-sky-500 text-sky-500 bg-clip-text ">
                {NICKNAME.toLowerCase()}
              </Link>
              一个编程爱好者!
            </h2>
            <h2 className="text-slate-800 dark:text-white leading-[46px] text-3xl max-md:text-2xl font-bold indent-[3em] max-md:indent-0 ">
              {TLINE_INTRODUCE}
            </h2>
          </div>
          <p className="text-slate-500 text-sm indent-[2em] leading-6 dark:text-slate-100 underline underline-offset-2 decoration-double decoration-sky-500">
            {BLOG_INTRODUCE}
          </p>
        </div>
        <div className="flex flex-col  min-w-72 items-center flex-1 justify-end">
          <Avatar className="h-60 w-60 max-md:h-32 max-md:w-32 flex flex-col ">
            <AvatarImage src={AVATAR_URL} />
            <AvatarFallback className="dark:text-white">{NICKNAME}</AvatarFallback>
          </Avatar>
          <span className="text-center leading-10 text-slate-800 max-md:hidden dark:text-white">{NICKNAME}</span>

          <ul className="flex gap-5 pt-6 ">
            <li>
              <Link href={GITHUB_URL}>
                <Button variant={'ghost'} size="icon" className="rounded-full">
                  <Github className="stroke-slate-950 w-6 h-6 dark:stroke-white" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={JUEJIN_URL}>
                <Button variant={'ghost'} size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 28"
                    fill="none"
                    className="fill-slate-950 w-6 h-6 dark:fill-white"
                  >
                    <path
                      d="M16.4992 6.77268L20.4727 3.40505L16.4992 0.00748237L16.4956 0L12.529 3.39757L16.4956 6.76894L16.4992 6.77268ZM16.498 17.3955L16.5015 17.3955L26.7515 8.77432L23.9714 6.39453L16.5015 12.6808L16.498 12.6808L16.4945 12.6845L9.02463 6.40201L6.24802 8.78181L16.4945 17.3992L16.498 17.3955ZM16.4947 23.2891L16.4982 23.2854L30.2199 11.7456L33 14.1254L26.7587 19.3752L16.4982 28L0.266778 14.3574L0 14.1291L2.77661 11.7531L16.4947 23.2891Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
            </li>
            <li>
              <Button variant={'ghost'} size="icon" className="rounded-full">
                <HoverCard>
                  <HoverCardTrigger>
                    <svg
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5235"
                      width="200"
                      height="200"
                      className="fill-slate-950 w-6 h-6 dark:fill-white"
                    >
                      <path
                        d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                        p-id="5236"
                      ></path>
                    </svg>
                  </HoverCardTrigger>
                  <HoverCardContent className="flex justify-center items-center">
                    <Image src={'/wxqrcode.jpg'} alt="微信二维码" width={200} height={200} />
                  </HoverCardContent>
                </HoverCard>
              </Button>
            </li>
          </ul>
        </div>
      </section>
      <section className=" flex max-md:flex-col max-md:p-2  p-12  min-h-screen ">
        <div className="bg-white w-full px-10 dark:bg-slate-950 dark:border border-slate-800 rounded-xl">
          <h3 className="leading-[4rem] text-center text-2xl underline-offset-8  underline decoration-solid  decoration-sky-400 dark:text-slate-300 ">
            推荐文章👍
          </h3>

          <ul className="grid grid-cols-2 grid-rows-2 px-4 py-8 gap-16 max-md:grid-cols-1">
            {Array(4)
              .fill(0)
              .map((item, index) => {
                return (
                  <li key={index} className="pb-4 border-b  dark:border-b-slate-600 border-b-slate-100">
                    <Link href={'/'}>
                      <h3 className="text-slate-800 leading-10 dark:text-slate-300  underline underline-offset-4 decoration-sky-400 decoration-double  ">
                        NextAuth实现微信登录
                      </h3>
                      <p className="text-slate-500  dark:text-slate-400  text-sm line-clamp-4  leading-5 h-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum, harum nam
                        commodi a laudantium perspiciatis corrupti eligendi mollitia praesentium enim odit sit at. Fugit
                        dolores dignissimos tempore delectus id?
                      </p>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
      <section className="flex max-md:flex-col min-h-screen p-12 max-md:p-2 ">
        <div className="bg-white w-full  px-10 dark:bg-slate-950 dark:border border-slate-800 rounded-xl">
          <h3 className="leading-[4rem] text-left text-2xl border-b border-b-slate-100 dark:text-white dark:border-b-slate-600">
            关于我😊
          </h3>
          <p className="pt-4 text-slate-500 text-sm indent-[2em] leading-6 dark:text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam dolorem beatae ab quae mollitia porro
            rem unde error dignissimos quasi facilis veniam harum voluptas quos ex a, facere quo! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Saepe quam dolorem beatae ab quae mollitia porro rem unde error
            dignissimos quasi facilis veniam harum voluptas quos ex a, facere quo! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe quam dolorem beatae ab quae mollitia porro rem unde error dignissimos
            quasi facilis veniam harum voluptas quos ex a, facere quo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Saepe quam dolorem beatae ab quae mollitia porro rem unde error dignissimos quasi facilis
            veniam harum voluptas quos ex a, facere quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quam dolorem beatae ab quae mollitia porro rem unde error dignissimos quasi facilis veniam harum voluptas
            quos ex a, facere quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam dolorem beatae ab
            quae mollitia porro rem unde error dignissimos quasi facilis veniam harum voluptas quos ex a, facere quo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam dolorem beatae ab quae mollitia porro
            rem unde error dignissimos quasi facilis veniam harum voluptas quos ex a, facere quo! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Saepe quam dolorem beatae ab quae mollitia porro rem unde error
            dignissimos quasi facilis veniam harum voluptas quos ex a, facere quo!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
