'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import {
  Menu,
  X,
  Leaf,
  LogIn,
  Phone,
  ChevronDown,
  LayoutDashboard,
  User as UserIcon,
  Settings,
  LogOut,
  Calendar,
} from 'lucide-react';

interface Profile {
  full_name: string | null;
  role: string;
  avatar_url: string | null;
}

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations('navigation');
  const router = useRouter();

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    const supabase = createClient();

    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data: profileData } = await (supabase as any)
          .from('profiles')
          .select('full_name, role, avatar_url')
          .eq('user_id', user.id)
          .single();

        if (profileData) {
          setProfile(profileData);
        } else {
          setProfile({
            full_name: user.user_metadata?.full_name || null,
            role: user.user_metadata?.is_crew_signup ? 'crew' : 'client',
            avatar_url: null,
          });
        }
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'INITIAL_SESSION') && session?.user) {
          setUser(session.user);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { data: profileData } = await (supabase as any)
            .from('profiles')
            .select('full_name, role, avatar_url')
            .eq('user_id', session.user.id)
            .single();

          if (profileData) {
            setProfile(profileData);
          } else {
            setProfile({
              full_name: session.user.user_metadata?.full_name || null,
              role: session.user.user_metadata?.is_crew_signup ? 'crew' : 'client',
              avatar_url: null,
            });
          }
          setLoading(false);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    if (!isSupabaseConfigured()) return;
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setShowUserMenu(false);
    router.push('/');
    router.refresh();
  };

  const getUserInitial = () => {
    if (profile?.full_name) return profile.full_name.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return 'U';
  };

  const getRoleBadge = (role: string) => {
    const badges: Record<string, { label: string; color: string }> = {
      admin: { label: 'Admin', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
      manager: { label: 'Manager', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      crew: { label: 'Crew', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
      client: { label: 'Client', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
    };
    return badges[role] || badges.client;
  };

  return (
    <nav className="bg-white/80 dark:bg-ge-dark/80 backdrop-blur-md shadow-lg sticky top-0 z-40 transition-colors duration-300 border-b border-ge-green/10 dark:border-ge-green-light/10 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Brand */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="shrink-0 relative z-10">
              <Image
                src="/logo_greempir_optimized.png"
                alt="Green Empire Lawn & Landscape"
                width={200}
                height={120}
                className="object-contain h-16 md:h-20 w-auto -my-3 md:-my-6"
                priority
              />
            </Link>
            <div className="flex flex-col ml-2 shrink-0">
              <Link href="/" className="font-bold text-gray-900 dark:text-white leading-snug">
                {/* Mobile: two lines */}
                <span className="block md:hidden text-base">
                  Green Empire Lawn<br />& Landscape
                </span>
                {/* Desktop: one line */}
                <span className="hidden md:block text-lg whitespace-nowrap">
                  Green Empire Lawn & Landscape
                </span>
              </Link>
              <a
                href="https://wa.me/15023142158"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ge-green dark:text-ge-green-light hover:underline leading-tight mt-0.5"
              >
                (502) 314-2158
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-ge-green dark:hover:text-ge-green-light transition-colors text-sm font-medium">
              {t('home')}
            </Link>
            <Link href="#services" className="text-gray-600 dark:text-gray-300 hover:text-ge-green dark:hover:text-ge-green-light transition-colors text-sm font-medium">
              {t('services')}
            </Link>
            <Link href="#packages" className="text-gray-600 dark:text-gray-300 hover:text-ge-green dark:hover:text-ge-green-light transition-colors text-sm font-medium">
              {t('packages')}
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-ge-green dark:hover:text-ge-green-light transition-colors text-sm font-medium">
              {t('contact')}
            </Link>
            <a
              href="https://wa.me/15023142158"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-ge-green/10 dark:bg-ge-green-light/20 text-ge-green dark:text-ge-green-light rounded-full text-sm font-medium hover:bg-ge-green/20 dark:hover:bg-ge-green-light/30 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (502) 314-2158
            </a>
          </div>

          {/* Right Side - Controls */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Auth Section */}
            {!loading && (
              <>
                {user ? (
                  <div className="relative hidden md:block">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-ge-dark-light transition-colors"
                    >
                      {profile?.avatar_url ? (
                        <Image src={profile.avatar_url} alt="Avatar" width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-ge-green flex items-center justify-center text-white text-sm font-semibold">
                          {getUserInitial()}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{profile?.full_name || 'User'}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${getRoleBadge(profile?.role || 'client').color}`}>
                          {getRoleBadge(profile?.role || 'client').label}
                        </span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>

                    {showUserMenu && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-ge-dark-light rounded-lg shadow-lg border border-gray-200 dark:border-ge-green/20 py-1 z-50">
                          <div className="px-4 py-3 border-b border-gray-200 dark:border-ge-green/10">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{profile?.full_name || 'User'}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                          </div>
                          <Link href="/dashboard" onClick={() => setShowUserMenu(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark">
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                          </Link>
                          <Link href="/dashboard/profile" onClick={() => setShowUserMenu(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark">
                            <UserIcon className="w-4 h-4" />
                            Profile
                          </Link>
                          <Link href="/dashboard/settings" onClick={() => setShowUserMenu(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark">
                            <Settings className="w-4 h-4" />
                            Settings
                          </Link>
                          <div className="border-t border-gray-200 dark:border-ge-green/10 mt-1 pt-1">
                            <button onClick={handleSignOut} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                              <LogOut className="w-4 h-4" />
                              Sign Out
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <Link href="/login" className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-ge-green dark:hover:text-ge-green-light font-medium text-sm transition-colors">
                      <LogIn className="w-4 h-4" />
                      Login
                    </Link>
                    <Link href="/contact" className="hidden md:flex items-center gap-2 px-4 py-2 ge-button-primary rounded-lg font-medium text-sm text-white">
                      <Calendar className="w-4 h-4" />
                      {t('getQuote')}
                    </Link>
                  </>
                )}
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-ge-dark-light transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-ge-green/10">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark-light rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('home')}
              </Link>
              <Link href="#services" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark-light rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('services')}
              </Link>
              <Link href="#packages" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark-light rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('packages')}
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark-light rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('contact')}
              </Link>
              <a
                href="https://wa.me/15023142158"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-ge-green/10 dark:bg-ge-green-light/20 text-ge-green dark:text-ge-green-light rounded-lg font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                (502) 314-2158
              </a>

              <div className="flex items-center space-x-2 px-4 pt-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>

              {!loading && (
                <>
                  {user ? (
                    <>
                      <div className="mx-4 p-3 bg-gray-50 dark:bg-ge-dark-light rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-ge-green flex items-center justify-center text-white font-semibold">
                            {getUserInitial()}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{profile?.full_name || 'User'}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                          </div>
                        </div>
                      </div>
                      <Link href="/dashboard" className="mx-4 flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-ge-dark rounded-lg" onClick={() => setIsMenuOpen(false)}>
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
                        className="mx-4 flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="mx-4 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-ge-green/20 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
                        <LogIn className="w-4 h-4" />
                        Login
                      </Link>
                      <Link href="/contact" className="mx-4 flex items-center justify-center gap-2 px-4 py-2 ge-button-primary rounded-lg font-medium text-sm text-white" onClick={() => setIsMenuOpen(false)}>
                        <Leaf className="w-4 h-4" />
                        {t('getQuote')}
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
