import SignIn from "@/app/(auth)/sign-in";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appWriteConfig = {
  endPoint: "https://cloud.appwrite.io/v1",
  platform: "com.aura.aora",
  projectId: "671404ca00297089bf83",
  databaseId: "671406c30010b7c12886",
  usersCollectionId: "671406e00014fb7b0bb2",
  videoCollectionId: "671406f8002ec963fcd5",
  storageId: "671408390005fc844f6d",
};

// init your react-native sdk
const client = new Client();

client
  .setEndpoint(appWriteConfig.endPoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  userName: string
) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      userName
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(userName);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: userName,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error: any) {
    throw new Error(error);
  }
};
