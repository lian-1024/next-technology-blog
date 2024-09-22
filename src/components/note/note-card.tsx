import { Eye } from 'lucide-react';
import Link from 'next/link';

interface NoteItem {
  id: number;
  title: string;
  description: string;
  view: number;
  tag: string[];
}

const NoteCard = ({ cardList }: { cardList: NoteItem[] }) => {
  return (
    <ul className="grid grid-cols-2 gap-16">
      {cardList.map((note) => (
        <li key={note.id} className="pb-2 border-b  dark:border-b-slate-600 border-b-slate-100">
          <Link href={'/'}>
            <h3 className="text-slate-800 leading-10 dark:text-slate-300  underline underline-offset-4 decoration-sky-400 decoration-double  ">
              {note.title}
            </h3>
            <p className="text-slate-500  dark:text-slate-400  text-sm line-clamp-4  leading-5 h-20">
              {note.description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex text-slate-600 text-xs items-center">
                <Eye className="mr-1 h-3 w-3 " />
                {note.view}
              </div>
              <div>
                {note.tag.map((tag) => (
                  <span key={tag} className=" px-2 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NoteCard;
