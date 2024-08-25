export interface EndpointDataDbRow {
  id: number; // SERIAL maps to number
  endpoint_name: string; // VARCHAR maps to string
  request_method: string; // VARCHAR maps to string
  request_body?: Record<string, any>; // JSONB maps to an object
  response_body?: Record<string, any>; // JSONB maps to an object
  created_at?: string; // TIMESTAMP maps to string (ISO 8601 format)
}
