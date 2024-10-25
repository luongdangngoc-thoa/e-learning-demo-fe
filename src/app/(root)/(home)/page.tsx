import Image from 'next/image'

import { Button } from '@/components/Button'
import NewsCard from '@/components/NewsCard'

import Banner from './components/Banner'
import ExploreCard from './components/ExploreCard'
import ExploreSubHeader from './components/ExploreSubHeader'
import FeatureCard from './components/FeatureCard'
import IntroBadge from './components/IntroBadge'
import IntroCard, { type IntroCardProps } from './components/IntroCard'
import StatItem from './components/StatItem'

const statisticsSection = [
  {
    title: '15K+',
    description: 'Student'
  },
  {
    title: '75%',
    description: 'Total success'
  },
  {
    title: '35',
    description: 'Main questions'
  },
  {
    title: '26',
    description: 'Chief experts'
  },
  {
    title: '16',
    description: 'Years of experience'
  }
]

const featuresList = [
  {
    title: 'Online Billing, Invoicing, & Contracts',
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    thumbnail: '/images/file-invoice.png',
    color: '#5B72EE'
  },
  {
    title: 'Easy Scheduling & Attendance Tracking',
    description:
      'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.',
    thumbnail: '/images/calendar.png',
    color: '#00CBB8'
  },
  {
    title: 'Customer Tracking',
    description:
      "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization.",
    thumbnail: '/images/users.png',
    color: '#29B9E7'
  }
]

const introDuctions: IntroCardProps[] = [
  {
    backgroundImage: '/images/for-instructors.png',
    title: 'FOR INSTRUCTORS',
    variant: 'outline',
    buttonLabel: 'Start a class today'
  },
  {
    backgroundImage: '/images/for-students.png',
    title: 'FOR STUDENTS',
    variant: 'default',
    buttonLabel: 'Enter access code'
  }
]

const designedForClassrooms = [
  {
    thumbnail: '/svg/ellipse-grid.svg',
    description: 'Teachers don’t get lost in the grid view and have a dedicated Podium space.'
  },
  {
    thumbnail: '/svg/class.svg',
    description: 'TA’s and presenters can be moved to the front of the class.'
  },
  {
    thumbnail: '/svg/group.svg',
    description: 'Teachers can easily see all students and class data at one time.'
  }
]

const badgeList = [
  {
    id: 1,
    color: '#FF6F00',
    title: 'Ut Sed Eros'
  },
  {
    id: 2,
    color: '#FF8374',
    title: 'Curabitur Egestas'
  },
  {
    id: 3,
    color: '#B45A1B',
    title: 'Quisque Conseq…'
  },
  {
    id: 4,
    color: '#FFB300',
    title: 'Cras Convallis'
  },
  {
    id: 5,
    color: '#C583FF',
    title: 'Vestibulum fauci…'
  },
  {
    id: 6,
    color: '#00A8FF',
    title: 'Ut Sed Eros'
  },
  {
    id: 7,
    color: '#6DB4A7',
    title: 'Vestibulum faucibu'
  }
]

const newsListData = [
  {
    id: 1,
    type: 'news',
    title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
    description:
      'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
    image: '/images/news-meeting.png'
  },
  {
    id: 2,
    type: 'PRESS RELEASE',
    title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
    description: 'Class Technologies Inc., the company that created Class,...',
    image: '/images/news.png'
  },
  {
    id: 3,
    type: 'news',
    title: 'Zoom’s earliest investors are betting millions on a better Zoom for schools',
    description: 'Zoom was never created to be a consumer product. Nonetheless, the...',
    image: '/images/news-1.png'
  },
  {
    id: 4,
    type: 'news',
    title: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
    description: 'This year, investors have reaped big financial returns from betting on Zoom...',
    image: '/images/news-2.png'
  }
]

export default function Home() {
  return (
    <div className=''>
      <Banner />
      <div className='mx-auto my-32 max-w-screen-2xl'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h3 className='text-5xl font-bold leading-10'>Our Success</h3>
          <p className='max-w-[750px] text-center text-lg leading-10 text-slate-blue'>
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra
            gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
        <div className='mt-24 flex items-center justify-center gap-24'>
          {statisticsSection.map((statistic) => (
            <StatItem key={statistic.title} title={statistic.title} description={statistic.description} />
          ))}
        </div>
        <div className='mt-32'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 className='text-4xl font-bold leading-10'>
              All-In-One
              <span className='text-turquoise-bright'> Cloud Software</span>
            </h3>
            <p className='max-w-[837px] text-center text-2xl leading-10 text-slate-blue'>
              TOTC is one powerful online software suite that combines all the tools needed to run a successful school
              or office.
            </p>
          </div>
          <div className='mt-28 flex items-center justify-center gap-15'>
            {featuresList.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                thumbnail={feature.thumbnail}
                color={feature.color}
              />
            ))}
          </div>
        </div>
        <div className='mt-40'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h3 className='text-4xl font-bold leading-10'>
              What is
              <span className='text-turquoise-bright'> TOTC?</span>
            </h3>
            <p className='max-w-[837px] text-center text-2xl leading-10 text-slate-blue'>
              TOTC is a platform that allows educators to create online classes whereby they can store the course
              materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide
              students with feedback all in one place.
            </p>
          </div>
          <div className='mt-20 flex items-center justify-center gap-25'>
            {introDuctions.map((intro) => (
              <IntroCard
                key={intro.title}
                backgroundImage={intro.backgroundImage}
                title={intro.title}
                variant={intro.variant}
                buttonLabel={intro.buttonLabel}
              />
            ))}
          </div>
        </div>
        <div className='mt-40 flex items-center gap-16'>
          <div className='relative flex flex-col items-start justify-start gap-7'>
            <h3 className='text-4xl font-medium leading-10'>
              Everything you can do in a physical classroom,
              <span className='text-turquoise-bright'> you can do with TOTC</span>
            </h3>
            <p className='text-2xl leading-10 tracking-wider text-slate-blue'>
              TOTC’s school management software helps traditional and online schools manage scheduling, attendance,
              payments and virtual classrooms all in one secure cloud-based system.
            </p>
            <Button variant='link' className='p-0 underline'>
              Learn more
            </Button>

            <Image
              src='/images/ellipse-green.png'
              alt='ellipse-green.png'
              width={73}
              height={73}
              className='absolute top-0 -z-10 translate-x-[-40%] translate-y-[-30%]'
            />
            <Image
              src='/images/ellipse-green.png'
              alt='ellipse-green.png'
              width={30}
              height={30}
              className='absolute right-0 top-[50%] -z-10'
            />
          </div>
          <div className='relative w-full'>
            <Image src='/images/confident-teacher.png' alt='confident-teacher.png' width={705} height={471} />
            <Image
              src='/images/soft-square-blue.png'
              alt='soft-square-blue.png'
              width={138}
              height={138}
              className='absolute left-0 right-0 top-0 -z-10 -translate-x-5 -translate-y-5'
            />
            <Image
              src='/images/soft-square-green.png'
              alt='soft-square-green.png'
              width={231}
              height={231}
              className='absolute bottom-0 right-0 -z-10 translate-x-5 translate-y-5'
            />
          </div>
        </div>
        <div className='mt-44'>
          <div className='relative flex flex-col items-center justify-center gap-7'>
            <h3 className='text-4xl font-bold leading-10'>
              Our
              <span className='text-turquoise-bright'> Features</span>
            </h3>
            <p className='text-2xl leading-10 tracking-wider text-slate-blue'>
              This very extraordinary feature, can make learning activities more efficient
            </p>
            <div className='mt-44 flex gap-24'>
              <div className='relative'>
                <Image src='/images/user-interface.png' alt='user-interface.png' width={860} height={500} />
                <Image
                  src='/images/ellipse-green.png'
                  alt='ellipse-green.png'
                  width={140}
                  height={140}
                  className='absolute -left-2 right-0 top-0 -z-10 translate-x-[50%] translate-y-[-40%]'
                />
                <Image
                  src='/images/ellipse-blue.png'
                  alt='ellipse-blue.png'
                  width={264}
                  height={264}
                  className='absolute bottom-[35%] right-[30%] -z-10 translate-x-[50%] translate-y-[-40%]'
                />
              </div>
              <div className='relative flex w-[542px] flex-col items-start justify-start'>
                <div className='text-4xl font-medium leading-10'>
                  <h1>A</h1>
                  <span className='text-turquoise-bright'> user interface </span>
                  <h1> designed for the classroom</h1>
                </div>
                <div className='mt-12 flex flex-col gap-10'>
                  {designedForClassrooms.map((item) => (
                    <div key={item.thumbnail} className='flex items-center gap-10'>
                      <div className='flex min-h-15 min-w-15 items-center justify-center rounded-full shadow-xl'>
                        {item?.thumbnail ?? <Image src={item.thumbnail} alt='class.svg' width={26} height={26} />}
                      </div>
                      <p className='text-1.5xl leading-10 text-slate-blue'>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex translate-y-[-55%] items-center justify-center gap-60'>
              <div className='relative flex w-[568px] flex-col items-start justify-center gap-7'>
                <h3 className='w-[393px] text-4xl font-medium leading-10'>
                  <span className='text-turquoise-bright'>Tools </span>
                  For Teachers And Learners
                </h3>
                <p className='text-1.5xl leading-10 text-slate-blue'>
                  Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can
                  handout assignments in real-time for students to complete and submit.
                </p>
              </div>
              <Image src='/images/girl.png' alt='girl.png' width={637} height={611} />
            </div>
            <div className='flex w-full items-center gap-64'>
              <Image src='/images/quizzes.png' alt='quizzes.png' width={617} height={651} />
              <div className='relative flex w-[568px] flex-col items-start justify-center gap-7'>
                <h3 className='w-[393px] text-4xl font-medium leading-10'>
                  Assessments,
                  <span className='text-turquoise-bright'> Quizzes, </span>
                  Tests
                </h3>
                <p className='text-1.5xl leading-10 text-slate-blue'>
                  Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the
                  online gradebook.
                </p>
              </div>
            </div>
            <div className='mt-14 flex items-center justify-center gap-24'>
              <div className='relative flex w-[568px] flex-col items-start justify-center gap-7'>
                <h3 className='w-[393px] text-4xl font-medium leading-10'>
                  <span className='text-turquoise-bright'>Class Management </span>
                  Tools for Educators
                </h3>
                <p className='text-1.5xl leading-10 text-slate-blue'>
                  Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With
                  the Gradebook, teachers can review and grade tests and quizzes in real-time.
                </p>
              </div>
              <Image src='/images/grade-book.png' alt='girl.png' width={808} height={560} />
            </div>
            <div className='mt-36 flex w-full items-center gap-60'>
              <Image src='/images/discussions.png' alt='discussions.png' width={755} height={499} />
              <div className='relative flex w-[568px] flex-col items-start justify-center gap-7'>
                <h3 className='w-[393px] text-4xl font-medium leading-10'>
                  One-on-One
                  <span className='text-turquoise-bright'> Discussions</span>
                </h3>
                <p className='text-1.5xl leading-10 text-slate-blue'>
                  Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                </p>
              </div>
            </div>
            <Button variant='outline' className='mt-14 h-20 w-72 text-2xl'>
              See more features
            </Button>
          </div>
        </div>
      </div>
      <div className='relative mt-14 pb-24 pt-60'>
        <div className='absolute inset-0 -z-10 w-[70%] rounded-br-100 bg-blue-light/20' />
        <div className='mx-auto max-w-screen-2xl'>
          <div className='flex flex-col gap-6'>
            <h2 className='text-4.5xl font-bold'>Explore Course</h2>
            <p className='text-2xl text-gray-charcoal'>Ut sed eros finibus, placerat orci id, dapibus.</p>
          </div>
          <div className='mt-28'>
            <ExploreSubHeader icon='/images/android-color-palette.png' title='Lorem Ipsum' />
            <div className='mt-11 flex items-center gap-5'>
              {badgeList.map((badge) => (
                <IntroBadge key={badge.id} coreColor={badge.color} title={badge.title} />
              ))}
              <ExploreCard className='ml-5' />
            </div>
          </div>
          <div className='mt-28'>
            <ExploreSubHeader icon='/images/android-globe.png' title='Quisque a Consequat' />
            <div className='mt-11 flex items-center gap-5'>
              {badgeList.map((badge) => (
                <IntroBadge key={badge.id} coreColor={badge.color} title={badge.title} />
              ))}
              <ExploreCard className='ml-5' variant='destructive' />
            </div>
          </div>
          <div className='mt-28'>
            <ExploreSubHeader icon='/images/ribbon-b.png' title='Aenean Facilisis' />
            <div className='mt-11 flex items-center gap-5'>
              {badgeList.map((badge) => (
                <IntroBadge key={badge.id} coreColor={badge.color} title={badge.title} />
              ))}
              <ExploreCard className='ml-5' />
            </div>
          </div>
        </div>
        <div className='mx-auto mt-32 max-w-screen-2xl'>
          <div className='flex items-center gap-32'>
            <div>
              <div className='flex items-center gap-7.5'>
                <div className='h-[1px] w-20 bg-blue-liberty' />
                <p className='text-xl tracking-wider text-blue-liberty'>TESTIMONIAL</p>
              </div>
              <h1 className='mt-8 text-6xl font-bold text-blue-dark'>What They Say?</h1>
              <p className='mt-7 text-2xl leading-10 tracking-wide text-slate-blue'>
                TOTC has got more than 100k positive ratings from our users around the world.
              </p>
              <p className='mt-6 text-2xl leading-10 tracking-wide text-slate-blue'>
                Some of the students and teachers were greatly helped by the Skilline.
              </p>
              <p className='mt-11 text-2xl leading-10 tracking-wide text-slate-blue'>
                Are you too? Please give your assessment
              </p>
              <Button variant='outline' className='mt-11 h-20 w-[403px] justify-between py-5 pl-8 pr-0 text-1.5xl'>
                Write your assessment
                <div className='flex size-20 items-center justify-center rounded-full border border-turquoise-medium'>
                  -&gt;
                </div>
              </Button>
            </div>
            <div>
              <Image
                src='/images/smiling-woman.png'
                alt='smiling-woman'
                width={560}
                height={700}
                className='mr-56 rounded-3xl'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto my-64 max-w-screen-2xl'>
        <div className='flex flex-col items-center gap-5'>
          <h1 className='text-4xl font-bold text-blue-dark'>Lastest News and Resources</h1>
          <p className='text-2xl text-slate-blue'>See the developments that have occurred to TOTC in the world</p>
        </div>
        <div className='mt-25 flex justify-between gap-30'>
          <NewsCard
            image='/images/news-meeting.png'
            variant='horizontal'
            title='Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution'
            description='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
            type='news'
          />
          <div className='space-y-12.5'>
            {newsListData.slice(1).map((item) => (
              <NewsCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
