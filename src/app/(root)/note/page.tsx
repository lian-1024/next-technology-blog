import NoteCard from '@/components/note/note-card';
import NoteNavigation from '@/components/note/note-navigation';

const CardList = [
  {
    id: 1,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
  {
    id: 2,
    title: 'NextJS实现微信扫码登录',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil, officia magni officiis aut, placeat doloribus, vero expedita eaque unde architecto autem ullam at ratione nemo dolorem! Sequi, aperiam blanditiis.',
    view: 100,
    tag: ['前端', '全栈', 'NextJS', '登录'],
  },
];

const Note = () => {
  return (
    <div className="pt-[86px] p-20  max-md:px-6 max-md:pt-28 flex gap-12 relative dark:bg-slate-950 max-md:flex-col-reverse">
      <main className="p-5">
        <NoteCard cardList={CardList} />
      </main>
      <aside className="flex-1 min-w-48 h-fit">
        <div className="fixed z-50 border border-slate-100 dark:border-slate-900 rounded-xl overflow-hidden h-fit ">
          <NoteNavigation />
        </div>
      </aside>
    </div>
  );
};

export default Note;
