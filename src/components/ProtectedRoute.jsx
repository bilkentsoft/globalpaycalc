import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Loader, Lock } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAuthError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      setSession(data.session);
    } catch (err) {
      console.error('[Login error]:', err);
      setAuthError(err.message || 'Failed to authenticate.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
        <Loader className="w-8 h-8 text-brand-500 animate-spin" />
        <p className="text-xs text-slate-400 font-medium">Verifying session token...</p>
      </div>
    );
  }

  // If no session exists, render the secure Login UI directly inside the Protected Wrapper!
  if (!session) {
    return (
      <div className="max-w-md w-full mx-auto glass-card p-8 rounded-3xl space-y-6 text-center shadow-2xl border-brand-500/20 my-8">
        <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto text-brand-400">
          <Lock className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Yönetim Paneli Giriş</h2>
          <p className="text-xs text-slate-400 mt-1">Supabase Authentication ile güvenli bağlantı.</p>
        </div>

        {authError && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 text-left">
            {authError}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">E-Posta</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@globalpaycalc.com"
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl transition cursor-pointer"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }

  // Once authenticated, render children (AdminDashboard)
  return children;
}
