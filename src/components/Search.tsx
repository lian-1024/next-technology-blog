'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search as SearchIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';

const Search = ({}) => {
  // 使用 zod 校验数据
  const searchSchema = z.object({
    search: z.string().min(1, {
      message: '请输入搜索内容',
    }),
  });

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
    <div className="flex justify-end flex-1">
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3 max-w-64">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
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
    </div>
  );
};

export default Search;
