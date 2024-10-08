"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { toast, Toaster } from "sonner";
import { Keypair } from "@solana/web3.js";
import Dropdown from "../dropdown/site-names";
import SearchInput from "../search-bar/search-bar";
import LightDropdown from "../dropdown/light-dropdown";
import { useWalletStore } from "@/store/walletStore";
import { Upload, Image as LucideImage } from "lucide-react";
import { profileData } from "@/utils/testData";
import Connect from "../buttons/wallet";

interface ProfileData {
  websiteUrl: string;
  keypair: Keypair;
  publicKey: string;
  pfp: string | null;
}

export default function Navbar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>("");
  const [keypair, setKeypair] = useState<Keypair | null>(null);
  const [pfp, setPfp] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const userPublicKey = useWalletStore((state) => state.publicKey);

  const walletConnected = useWalletStore((state) => state.walletConnected);
  const signedIn = useWalletStore((state) => state.isSignedIn);
  const setWalletConnected = useWalletStore(
    (state) => state.setWalletConnected
  );
  const setSignedIn = useWalletStore((state) => state.setIsSignedIn);

  const handleCreateKeypair = (): void => {
    const newKeypair = Keypair.generate();
    setKeypair(newKeypair);
    setPublicKey(newKeypair.publicKey.toString());
    toast.success("New keypair generated successfully!");
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      setPfp(file);
      setFileName(file.name);
      toast.success("Profile picture uploaded successfully!");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleCreateProfile = (): void => {
    try {
      if (!keypair) {
        toast.error("Please generate a keypair first.");
        return;
      }

      if (!websiteUrl) {
        toast.error("Please enter a website URL.");
        return;
      }

      const profileData: ProfileData = {
        websiteUrl,
        keypair,
        publicKey: keypair.publicKey.toString(),
        pfp: pfp ? pfp.name : null,
      };

      console.log("Profile created:", profileData);
      toast.success("Profile created successfully!");
      setWalletConnected(true);
      setIsModalOpen(false);
      setSignedIn(true);
    } catch (error) {
      console.error("Error creating profile:", error);
      toast.error("Failed to create profile. Please try again.");
    }
  };

  const handleOpenCreateProfileModal = () => {
    if (!walletConnected) {
      return toast.error("Please connect your wallet!");
    }
    setIsModalOpen(true);
  };

  return (
    <div className="relative">
      <Toaster />
      <div className="bg-white/95 lg:bg-white/80 h-14 px-4 sm:px-6 py-4 flex flex-row justify-between items-center border-b border-[#f6f6f6] sticky top-0 z-50">
        <div className="hidden lg:block text-base font-instrument">
          Dashboard
        </div>
        <Image
          src="/dashboard/dashboard-logo.svg"
          alt="Vorr Logo"
          width={26}
          height={26}
          className="lg:hidden"
        />

        {walletConnected && signedIn ? (
          <div className="flex items-center space-x-2">
            <Dropdown />
            <SearchInput />
            <LightDropdown
              title={userPublicKey.slice(0, 15)}
              options={profileData.options}
            />
          </div>
        ) : (
          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center">
              <Connect />
            </div>
            <button
              className="flex items-center gap-2 bg-black text-white p-2 rounded-lg hover:scale-95 transition-all"
              onClick={() => handleOpenCreateProfileModal()}
            >
              <Image
                src="/dashboard/wallet-icon.svg"
                alt="profile"
                width={20}
                height={20}
              />
              <span>Create Profile</span>
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Create profile</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Website URL
                </label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setWebsiteUrl(e.target.value)
                  }
                  placeholder="www.pump.fun"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your keypair
                </label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    readOnly
                    value={keypair ? "Keypair generated" : "No keypair found"}
                    className="flex-grow px-3 py-2 bg-gray-50 border border-gray-300 rounded-l-md"
                  />
                  <button
                    onClick={handleCreateKeypair}
                    className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 transition-colors duration-200"
                  >
                    Create new
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your public key
                </label>
                <input
                  type="text"
                  value={publicKey}
                  readOnly
                  placeholder="Your public key will appear here"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Set a PFP (optional)
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="sr-only"
                      accept="image/*"
                    />
                    <button
                      onClick={handleButtonClick}
                      className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transition-colors duration-200"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      <span className="truncate">
                        {fileName ? fileName : "Choose file"}
                      </span>
                    </button>
                  </div>
                  <button
                    onClick={() => console.log("hello world")}
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200 flex items-center justify-center"
                  >
                    <LucideImage className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">Choose an NFT</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Creating a new profile will whitelist your website in our DB.
              Complete this step to get access to our script.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateProfile}
                className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
              >
                Complete profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
