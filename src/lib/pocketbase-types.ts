/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Communities = "Communities",
	Ideas = "Ideas",
	Tags = "Tags",
	Cities = "cities",
	CommunityStaff = "community_staff",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CommunitiesRecord = {
	community_avatar?: string
	community_description: string
	community_location?: RecordIdString[]
	community_name: string
}

export enum IdeasStatusOptions {
	"submitted" = "submitted",
	"processing" = "processing",
	"failed" = "failed",
}
export type IdeasRecord = {
	agent: RecordIdString
	author: RecordIdString
	community?: RecordIdString
	idea_text?: string
	idea_title: string
	status: IdeasStatusOptions
	tags: RecordIdString[]
}

export type TagsRecord = {
	tag_name: string
}

export type CitiesRecord = {
	city_name: string
	detail_address: string
}

export type CommunityStaffRecord = {
	admin: RecordIdString[]
	commune: RecordIdString[]
	managers: RecordIdString[]
}

export type UsersRecord = {
	avatar?: string
	original_name?: string
  username?: string
  email?: string
  phone_number?:string
}

// Response types include system fields and match responses from the PocketBase API
export type CommunitiesResponse<Texpand = unknown> = Required<CommunitiesRecord> & BaseSystemFields<Texpand>
export type IdeasResponse<Texpand = unknown> = Required<IdeasRecord> & BaseSystemFields<Texpand>
export type TagsResponse<Texpand = unknown> = Required<TagsRecord> & BaseSystemFields<Texpand>
export type CitiesResponse<Texpand = unknown> = Required<CitiesRecord> & BaseSystemFields<Texpand>
export type CommunityStaffResponse<Texpand = unknown> = Required<CommunityStaffRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Communities: CommunitiesRecord
	Ideas: IdeasRecord
	Tags: TagsRecord
	cities: CitiesRecord
	community_staff: CommunityStaffRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Communities: CommunitiesResponse
	Ideas: IdeasResponse
	Tags: TagsResponse
	cities: CitiesResponse
	community_staff: CommunityStaffResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Communities'): RecordService<CommunitiesResponse>
	collection(idOrName: 'Ideas'): RecordService<IdeasResponse>
	collection(idOrName: 'Tags'): RecordService<TagsResponse>
	collection(idOrName: 'cities'): RecordService<CitiesResponse>
	collection(idOrName: 'community_staff'): RecordService<CommunityStaffResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
