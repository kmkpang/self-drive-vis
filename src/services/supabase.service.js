import { createClient } from '@supabase/supabase-js';

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabase_key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabase_url, supabase_key);

export const getWeatherOptions = () =>
  supabase
    .from('weather')
    .select()
    .then((e) => e.data);

export const getIntersectionType = () =>
  supabase
    .from('intersection_type')
    .select()
    .then((e) => e.data);

export const getRoadCondition = () =>
  supabase
    .from('road_condition')
    .select()
    .then((e) => e.data);

export const setTestScenario = (data) => supabase.from('test_scenario').insert([data]);

export const getTestScenario = () =>
  supabase
    .from('test_scenario')
    .select()
    .then((e) => e.data);
