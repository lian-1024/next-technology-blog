'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search as SearchIcon } from 'lucide-react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';
// 使用 zod 校验数据
const searchSchema = z.object({
  search: z.string().min(1, {
    message: '请输入搜索内容',
  }),
});
const Search = ({}) => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
  });

  /**
   * 表单提交事件
   */
  const onSubmit = (values: z.infer<typeof searchSchema>) => {
    console.log(values);
  };
  return (
    <>
      <div className="flex justify-end flex-1 max-sm:hidden ">
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3 max-w-64">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="请输入您要搜索关键字" {...field} className="text-xs rounded-full " />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" size="icon" className="rounded-full">
              <SearchIcon className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
      <div className="sm:hidden flex flex-1 justify-end">
        <SearchDialog form={form} onSubmit={onSubmit} />
      </div>
    </>
  );
};

export function SearchDialog({
  form,
  onSubmit,
}: {
  form: UseFormReturn<
    {
      search: string;
    },
    undefined
  >;
  onSubmit: (values: z.infer<typeof searchSchema>) => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] max-md:w-[80vw] bg-white dark:bg-slate-950 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="hidden">请输入您要搜索的内容</DialogTitle>
          <DialogDescription className="hidden">请输入您要搜索的内容</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3 max-w-64">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="请输入您要搜索关键字" {...field} className="text-xs rounded-full" />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" size="icon" className="rounded-full">
              <SearchIcon className="h-4 w-4" />
            </Button>
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit" className="hidden">
            S搜索
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Search;
