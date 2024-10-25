import { cn } from '@/shared/utils/tailwind.util'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-slate-200/40', className)} {...props} />
}

export { Skeleton }
