-- Create a trigger function to create a user in the users table when a new user is created in the auth.users table
CREATE OR REPLACE FUNCTION create_user() RETURNS TRIGGER AS $$
BEGIN
	INSERT INTO public.users (id, email, created_at, updated_at)
	VALUES (NEW.id, NEW.email, now(), now());
	RETURN NEW;
END;

$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to call the trigger function when a new user is created in the auth.users table
CREATE TRIGGER create_user_trigger
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION create_user();
