import { ArrowRight, BookOpen, MessageCircle, Calendar, CreditCard, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8B4513] to-[#DAA520] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to Darul Arkem
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your gateway to Islamic education and spiritual growth. Join our community of learners and embark on a journey of knowledge and enlightenment.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                  <Link to="/register">Join Our Community</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#8B4513]">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need for Your Educational Journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive Islamic education with modern learning tools and support
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <GraduationCap className="h-5 w-5 flex-none text-[#8B4513]" />
                  Islamic Education
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Access comprehensive Islamic courses taught by qualified scholars.</p>
                  <p className="mt-6">
                    <Link to="/courses" className="text-sm font-semibold leading-6 text-[#8B4513]">
                      View courses <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <MessageCircle className="h-5 w-5 flex-none text-[#8B4513]" />
                  Community Support
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Connect with fellow students and scholars through our messaging system.</p>
                  <p className="mt-6">
                    <Link to="/community" className="text-sm font-semibold leading-6 text-[#8B4513]">
                      Join community <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Calendar className="h-5 w-5 flex-none text-[#8B4513]" />
                  Events & Activities
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Participate in regular events, workshops, and spiritual gatherings.</p>
                  <p className="mt-6">
                    <Link to="/events" className="text-sm font-semibold leading-6 text-[#8B4513]">
                      View calendar <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-[#8B4513] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Your Journey Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Join our growing community of students and begin your path to knowledge and spiritual growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-[#8B4513] hover:bg-gray-100" asChild>
                <Link to="/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}