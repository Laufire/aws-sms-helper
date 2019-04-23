#!/bin/bash

# Init
cd $(dirname $0)

# Config
defaultRegion='ap-southeast-1'

# Helpers
generateOTP() {

	otpLength=${1:-8}
	result=""

	for i in $(seq 1 $otpLength)
	do
		result="$result"$((RANDOM % 10))
	done

	echo "$result"
}

# Tasks
gatherInput() {

	read -p "AWS accessKeyId: " accessKeyId
	export accessKeyId
	read -p "AWS secretAccessKey: " secretAccessKey
	export secretAccessKey
	read -p "AWS region ($defaultRegion): " region
	region=${region:-$defaultRegion}
	export region
	read -p "Target Phone: " phone
	export phone
	otp=$(generateOTP 8)
	export otp
}

# Main
gatherInput
node index.js
