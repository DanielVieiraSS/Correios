import { IPassword } from "@/interfaces/password";
import { supabaseClient } from "@/supabase/initializer";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export async function fetchPasswords() {
  const response: PostgrestSingleResponse<IPassword[]> = await supabaseClient
    .from("senhas")
    .select();

  return response;
}
